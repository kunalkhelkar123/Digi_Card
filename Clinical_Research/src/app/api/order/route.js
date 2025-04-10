import axios from "axios";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    console.log("OAuth Access Token:" );

    const body = await req.json();

    const clientId = process.env.client_id;
    const clientSecret = process.env.client_secret;

    const formData = new URLSearchParams();
    formData.append("client_id", clientId);
    formData.append("client_version", "1");
    formData.append("client_secret", clientSecret);
    formData.append("grant_type", "client_credentials");

    console.log("form data ",formData)
    const response = await axios.post(
      // "https://api.phonepe.com/apis/identity-manager/v1/oauth/token",
      "https://api.phonepe.com/apis/identity-manager/v1/oauth/token",
      formData.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = response.data.access_token;
    console.log("OAuth response.data:", response.data);

    console.log("OAuth Access Token:", accessToken);

    // Step 2: Prepare Payment Payload
    const merchantOrderId = `ORD_${uuidv4()}`;
    const paymentPayload = {
      merchantOrderId,
      amount: 2 * 100,
      expireAfter: 1200,
      metaInfo: {
        udf1: body.udf1 || "extra-info-1",
        udf2: body.udf2 || "extra-info-2",
      },
      paymentFlow: {
        type: "PG_CHECKOUT",
        message: "Payment initiated",
        merchantUrls: {
          redirectUrl:
            body.redirectUrl || "https://cretconsulting.com/api/status",
        },
      },
      paymentModeConfig: {
        enabledPaymentModes: [
          {
            type: "UPI_INTENT",
          },
          {
            type: "UPI_QR",
          },
        ],
      },
    };

    const payRes = await axios.post(
      // "https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/pay",
      "https://api.phonepe.com/apis/pg/checkout/v2/pay",

      paymentPayload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `O-Bearer ${accessToken}`,
        },
      }
    );
    console.log("payRes   ", payRes.data);
    return NextResponse.json({
      success: true,
      merchantOrderId,
      redirectUrl: payRes.data.redirectUrl,
      AccessToken: accessToken,
      orderId:payRes.data.orderId
    });
  } catch (error) {
    console.error("Payment Error:", error?.response?.data || error.message);
    return NextResponse.json(
      {
        success: false,
        error: error?.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}

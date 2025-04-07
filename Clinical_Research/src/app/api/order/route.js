import axios from "axios";
import crypto from "crypto";
import { NextResponse } from "next/server";

const salt_key = "dbe9997d-4b0b-4311-b9d2-d34eb1be18dc";
const merchant_id = "M22U4KABQ3GHA";

export async function POST(req) {
  try {
    const reqData = await req.json();
    const encodedReqData = encodeURIComponent(JSON.stringify(reqData));
    const merchantTransactionId = reqData.transactionId;

    const data = {
      merchantId: merchant_id,
      merchantTransactionId,
      name: reqData.name,
      amount: reqData.amount * 100,
      redirectUrl: `https://cretconsulting.com/api/status?id=${merchantTransactionId}`,
      redirectMode: "POST",
      callbackUrl: `https://cretconsulting.com/api/status?id=${merchantTransactionId}`,
      mobileNumber: "9146219186", // Ideally dynamic
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const stringToHash = payloadMain + "/pg/v1/pay" + salt_key;
    const sha256 = crypto.createHash("sha256").update(stringToHash).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

    const response = await axios({
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchant_id,
      },
      data: {
        request: payloadMain,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("error from server", error?.response?.data || error.message);
    return NextResponse.json(
      {
        error: "Payment initiation failed",
        details: error?.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}

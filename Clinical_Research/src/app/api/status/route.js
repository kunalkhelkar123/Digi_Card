import crypto from "crypto";
import axios from "axios";
import { NextResponse } from "next/server";

// let saltKey = "96434309-7796-489d-8924-ab56988a6076";
// let merchantId = "PGTESTPAYUAT86";

const saltKey = "dbe9997d-4b0b-4311-b9d2-d34eb1be18dc";
const merchantId = "M22U4KABQ3GHA";

export async function POST(req) {
  try {
    const searchParams = req.nextUrl.searchParams;

    console.log("inside status");

    const merchantTransactionId = searchParams.get("id");
    const encodedReqData = searchParams.get("reqdata");
    const reqData = JSON.parse(decodeURIComponent(encodedReqData));
    console.log("Decoded reqdata:", reqData);
    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + saltKey;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const options = {
      method: "GET",
      url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId,
      },
    };

    const response = await axios(options);



    if (response.data.success === true) {
      return NextResponse.redirect("https://cretconsulting.com/success/", {
        status: 301,
      });
    } else {
      return NextResponse.redirect("https://cretconsulting.com/failure", {
        status: 301,
      });
    }
  } catch (error) {
    console.error("Payment status check error:", error);
    return NextResponse.json(
      { error: "Payment check failed", details: error.message },
      { status: 500 }
    );
  }
}

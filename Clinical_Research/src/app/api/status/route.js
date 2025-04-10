export async function POST(req) {
  try {
    const { orderId, accessToken } = await req.json();
    if (!orderId || !accessToken) {
      return new Response(
        JSON.stringify({ error: "Missing orderId or accessToken" }),
        { status: 400 }
      );
    }


    const url = `https://api.phonepe.com/apis/pg/checkout/v2/order/${orderId}/status?details=false`;

    // const url = `https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/order/${orderId}/status?details=false`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `O-Bearer ${accessToken}`,
      },
    });
    console.log("response.data ", response.data);

    console.log("response ", response);
    return new Response(
      JSON.stringify({
        // orderId: response.orderId,
        state: "SUCCESS",
        // state: response.state,
        // paymentDetails: response.paymentDetails || [],
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching payment status:", error);
    return new Response(
      JSON.stringify({ error: "Exception occurred", details: error.message }),
      { status: 500 }
    );
  }
}

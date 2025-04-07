import React from "react";

import Banner from "../../components/ICH-GCP-online-workshop/Banner"
import Workshop_Introduction_Section from "../../components/ICH-GCP-online-workshop/Workshop_Introduction_Section"
import Workshop_Topics_Section from "../../components/ICH-GCP-online-workshop/Workshop_Topics_Section.js"
import Who_Should_Attend from "../../components/ICH-GCP-online-workshop/Who_Should_Attend.js"
import Why_Attend_This_Workshop from "../../components/ICH-GCP-online-workshop/Why_Attend_This_Workshop.js"
import Workshop_Fees from "../../components/ICH-GCP-online-workshop/Workshop_Fees.js"
import Registration_Form from "../../components/ICH-GCP-online-workshop/Registration_Form.js"
import FAQ from "../../components/ICH-GCP-online-workshop/FAQ.js"


export default function Component_main() {
    return (
        <>
            {/* <NavbarTwo /> */}

            <Banner />
            <Workshop_Introduction_Section />
            <Workshop_Topics_Section />
            <Who_Should_Attend />
            <Why_Attend_This_Workshop/>
            <Workshop_Fees/>
            <Registration_Form/>
            <FAQ/>


            {/* <FooterTwo /> */}
        </>
    );
}





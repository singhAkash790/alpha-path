import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import React from "react";

const page = () => {
  const generateAOSAttributes = (index, baseDelay = 150, step = 30) => {
    const delay = baseDelay + index * step;
    return {
      "data-aos": "fade-up",
      "data-aos-delay": delay,
      "data-aos-duration": 200,
      "data-aos-once": true,
      "data-aos-offset": delay,
      "data-aos-easing": "cubic-bezier(.57,.21,.69,3.25)",
    };
  };

  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section className="position-relative">
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="title col-12 float-start text-center">
                    <h2>PRIVACY POLICY</h2>
                  </div>
                  <div className="privacy_pol_cnt">
                    <p
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={150}
                      data-aos-once="true"
                      data-aos-offset={150}
                      data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                    >
                      Assure Pathlabs Privacy Policy briefly gives the way your
                      information is collected and used by Assure Pathlabs
                      through Assurepathlabs.com. By accessing the services
                      provided by www.assurepathlabs.com you affirm to the
                      collection and use of your personal information by
                      www.assurepathlabs.com in the way it has been presented in
                      this Privacy Policy. You are advised to read the policy
                      carefully.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-delay={180}
                      data-aos-duration={180}
                      data-aos-once="true"
                      data-aos-offset={180}
                      data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                    >
                      If you have any query or doubt regarding this declaration,
                      you should contact ASSURE PATHLABS Customer Care at :
                      <a href="mailto:assurepathlabs@gmail.com">
                        assurepathlabs@gmail.com
                      </a>
                    </p>

                    <div
                      class="contentbox"
                      data-aos="fade-up"
                      data-aos-delay={200}
                      data-aos-duration={200}
                      data-aos-once="true"
                      data-aos-offset={200}
                      data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                    >
                      <h3
                        data-aos="fade-up"
                        data-aos-delay={180}
                        data-aos-duration={180}
                        data-aos-once="true"
                        data-aos-offset={180}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        Information Collected from the Users
                      </h3>
                      <p
                        data-aos="fade-up"
                        data-aos-delay={180}
                        data-aos-duration={180}
                        data-aos-once="true"
                        data-aos-offset={180}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        We accumulate the following "personal information" about
                        you online when you voluntarily provide it to us through
                        our website:
                      </p>
                      <ul
                        data-aos="fade-up"
                        data-aos-delay={180}
                        data-aos-duration={180}
                        data-aos-once="true"
                        data-aos-offset={180}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Salutation
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          First Name, Last Name
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Age &amp; Gender
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Email Address
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Billing and Collection Address
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Phone Number
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Zip / Postal Code
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={180}
                          data-aos-duration={180}
                          data-aos-once="true"
                          data-aos-offset={180}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Aadhaar Card
                        </li>
                      </ul>
                      <p
                        data-aos="fade-up"
                        data-aos-delay={180}
                        data-aos-duration={180}
                        data-aos-once="true"
                        data-aos-offset={180}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        How the information collected will be used by
                        assurepathlab.com?
                      </p>
                      <h3
                        data-aos="fade-up"
                        data-aos-delay={180}
                        data-aos-duration={180}
                        data-aos-once="true"
                        data-aos-offset={180}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        Usage of email address &amp; mobile number is for:
                      </h3>
                      <ul
                        data-aos="fade-up"
                        data-aos-delay={180}
                        data-aos-duration={180}
                        data-aos-once="true"
                        data-aos-offset={180}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        <li
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={150}
                          data-aos-once="true"
                          data-aos-offset={150}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Inform any kind of alteration in the privacy policy or
                          terms and condition
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={150}
                          data-aos-once="true"
                          data-aos-offset={150}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Registration affirmation and password reminder
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={150}
                          data-aos-once="true"
                          data-aos-offset={150}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Event based communication such as order information,
                          delivery information, etc.
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={150}
                          data-aos-once="true"
                          data-aos-offset={150}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Special offers, if any
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={150}
                          data-aos-once="true"
                          data-aos-offset={150}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          We may share or aggregate, non-personal information
                          about website usage with unaffiliated third parties.
                          This aggregate information does not contain any
                          personal information about our users. We take adequate
                          steps to ensure that our third parties adopt
                          reasonable level of security practices and procedures
                          to ensure security of personal information
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={150}
                          data-aos-duration={150}
                          data-aos-once="true"
                          data-aos-offset={150}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          We will not disclose any personal information to any
                          third party, unless (I) it is necessary for providing
                          services to or you have authorized us to do so, (ii)
                          we are legally required to do so, i.e. in compliance
                          of regulatory requirement or in accordance to the
                          court order or other legal / quasi legal process, and
                          / or (iii) it is necessary to do so in order to
                          protect and defend the rights or property of this
                          website. We do not have any responsibility for any
                          personal information which is generally available to
                          the public.
                        </li>
                      </ul>
                      <h3
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={200}
                        data-aos-once="true"
                        data-aos-offset={200}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        Usage of your personal information is:
                      </h3>
                      <p
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={200}
                        data-aos-once="true"
                        data-aos-offset={200}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        ASSURE PATHLABS does collect your personal information
                        for a variety of regulatory and business purposes. These
                        include, but are not limited to:
                      </p>
                      <ul
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={200}
                        data-aos-once="true"
                        data-aos-offset={200}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Provide results for the tests requested by you
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Respond to your request for service or assistance
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Age &amp; Gender for reporting results accurately
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Provide, maintain and improve our services
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Safeguard social history as governed by existing law
                          or policy
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Ensure adherence to legal and regulatory requirements
                          for prevention and detection of frauds and crimes.
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          Evaluate our services and products and to conduct
                          customer surveys
                        </li>
                      </ul>
                      <h3
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={200}
                        data-aos-once="true"
                        data-aos-offset={200}
                        data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                      >
                        Use and Disclose of your Report / information / data:
                      </h3>
                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          We may use or disclose your report in the course of
                          activities necessary to support our health care
                          operations, such as performing quality checks on our
                          testing, for teaching purposes, or for developing
                          normal reference ranges for tests that we perform.
                        </li>
                        <li
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-duration={200}
                          data-aos-once="true"
                          data-aos-offset={200}
                          data-aos-easing="cubic-bezier(.57,.21,.69,3.25)"
                        >
                          We may disclose your reports to other companies or
                          individuals who need your reports in order to provide
                          specific services to us. These other entities, known
                          as "business associates," must comply with the terms
                          of a contract designed to ensure that they will
                          maintain the privacy and security of the reports /
                          data we provide to them or which they create on our
                          behalf.
                        </li>
                        <li {...generateAOSAttributes(3, 180, 30)}>
                          We may disclose your report to the physicians and
                          other authorized health care professionals who need to
                          access your laboratory report to treat you.
                        </li>
                        <li {...generateAOSAttributes(3, 180, 30)}>
                          We may use your report with our billing department and
                          may disclose it to insurance companies, hospitals,
                          physicians or to third parties for payment purpose.
                          Our employees are bound by Code of Conduct and
                          Confidentiality Policies which obligate them to
                          protect the confidentiality of personal information.
                        </li>
                        <li {...generateAOSAttributes(3, 180, 30)}>
                          We may disclose your reports to Health Department or
                          any other Govt. body or regulatory authority as and
                          when required by them for collection, processing
                          health information of the state / country.
                        </li>
                        <li {...generateAOSAttributes(3, 180, 30)}>
                          We may also share your personal information with
                          Government agencies or other authorized law
                          enforcement agencies (LEAs) mandated under law to
                          obtain such information for the purpose of
                          verification of identity or for prevention, detection,
                          investigation including but not limited to cyber
                          incidents, prosecution, and punishment of offences.
                        </li>
                        <li {...generateAOSAttributes(3, 180, 30)}>
                          To support our health care operations, such as
                          performing quality checks on your testing, for
                          teaching purposes, or for developing normal reference
                          ranges for the tests we perform.
                        </li>
                        <li {...generateAOSAttributes(3, 180, 30)}>
                          To respond to summons, court orders, or legal process,
                          or to establish or exercise our legal rights or defend
                          against legal claims.
                        </li>
                        <li {...generateAOSAttributes(3, 180, 30)}>
                          You agree that we may share your Personal Information
                          with the following categories of activities with from
                          time-to-time:
                        </li>
                        <li
                          class="noborder"
                          {...generateAOSAttributes(3, 180, 30)}
                        >
                          <ol>
                            <li
                              className="pt-2"
                              {...generateAOSAttributes(3, 180, 30)}
                            >
                              Advertisements
                              <ol
                                className="py-2"
                                {...generateAOSAttributes(3, 180, 30)}
                              >
                                <li>
                                  Website may aggregate (gather up data across
                                  all accounts) Personal Information and
                                  disclose such information in a non-personally
                                  identifiable manner to advertisers and other
                                  third parties for other marketing and
                                  promotional purposes.
                                </li>
                                <li>
                                  When you enter Personal Information on any
                                  form of an advertiser, such information is
                                  simultaneously collected by Website and the
                                  advertiser. The Personal Information is used
                                  by Website in accordance with the terms of
                                  this Privacy Policy and is used by the
                                  advertiser as per the advertiser's prevalent
                                  privacy policies. Because we do not control
                                  the privacy practices of these advertisers,
                                  you should evaluate their practices before
                                  deciding to provide the said information.
                                </li>
                              </ol>
                            </li>
                            <li>
                              Posting to public areas of the website
                              <ol
                                className="py-2"
                                {...generateAOSAttributes(3, 180, 30)}
                              >
                                <li>
                                  Please remember that if you post any of your
                                  Personal Information in public areas of the
                                  Website such as in online forums or chat
                                  rooms, or in the Website's searchable
                                  database, such information may be collected
                                  and used by others over whom we have no
                                  control. We are not responsible for the use
                                  made by third parties of information you post
                                  or otherwise make available in public areas of
                                  Website.
                                </li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                      </ul>
                      <h3 {...generateAOSAttributes(3, 180, 30)}>
                        Other websites
                      </h3>
                      <p {...generateAOSAttributes(3, 180, 30)}>
                        Our Website may contain links to other websites. Please
                        note that when you click on one of these links, you are
                        entering another website over which the Website has no
                        control and will bear no responsibility. Often these
                        websites require you to enter your Personal Information.
                        We encourage you to read the privacy statements on all
                        such websites as their policies may differ from ours.
                        You agree that we shall not be liable for any breach of
                        your privacy of Personal Information or loss incurred by
                        your use of these websites.
                      </p>
                      <h3 {...generateAOSAttributes(3, 180, 30)}>
                        Usage of anonymous traffic information is to:
                      </h3>
                      <p>
                        Prompt us of who you are in order to deliver superior
                        and more personalized service Aid to make a diagnosis of
                        the problems with our server Security Steps Used by Us:
                        <br />
                        Patient Reporting and Test Ordering are under our
                        website <br />
                        www.assurepathlabs.com.
                      </p>
                      <h3 {...generateAOSAttributes(3, 180, 30)}>
                        Privacy Update:
                      </h3>
                      <p {...generateAOSAttributes(3, 180, 30)}>
                        Assure Pathlabs reserves the privilege to modify or
                        renew this policy at any time by placing a notice on our
                        site. Any kind of modification shall come into effect
                        immediately upon posting to this site. We reserve the
                        right to revise this privacy statement at any time, so
                        please study it frequently. If we make material changes
                        to this policy, we will notify you by means of a notice
                        on our homepage only.
                      </p>
                      <h3 {...generateAOSAttributes(3, 180, 30)}>
                        Governing Law and Dispute Resolution
                      </h3>
                      <p {...generateAOSAttributes(3, 180, 30)}>
                        This Privacy Policy and Terms of Use shall be governed
                        by and constructed in accordance with the laws of India
                        only without reference to conflict of laws principles
                        and disputes arising in relation hereto and shall be
                        subject to the exclusive jurisdiction of the competent
                        courts of Jalandhar in Punjab, India.
                      </p>
                      <h3 {...generateAOSAttributes(3, 180, 30)}>
                        Contacting the Website
                      </h3>
                      <p>
                        If you have any questions about this Privacy Policy, the
                        privacy practices of this Website, or if you want to
                        exercise any of the rights that you are given under this
                        Privacy Policy, you can contact us.
                      </p>
                      <h3 {...generateAOSAttributes(3, 180, 30)}>
                        Assignability
                      </h3>
                      <p {...generateAOSAttributes(3, 180, 30)}>
                        Assure Pathlabs may assign any of its
                        responsibilities/obligations to any other person without
                        notice to the User, at its sole discretion. However, you
                        shall not assign, sub-licence or otherwise transfer any
                        of your rights under this Privacy Policy to any other
                        party, unless a written consent is taken from Assure
                        Pathlabs.
                      </p>
                      <h3 {...generateAOSAttributes(3, 180, 30)}>Disclaimer</h3>
                      <p {...generateAOSAttributes(3, 180, 30)}>
                        Assure Pathlabs does not access, store or keep credit
                        card data. All credit card transactions occur using
                        Secure Server Software (SSL) for 128 bit encryption
                        through third party gateways and the laboratory plays no
                        role in the transaction, except for directing the
                        customers to gateways or relevant webpage. Accordingly,
                        Assure Pathlabs shall not be responsible or liable for
                        any loss or damage due to any disclosure whatsoever of
                        Personal Information.
                      </p>
                      <p {...generateAOSAttributes(3, 180, 30)}>
                        Assure Pathlabs shall not be liable for any loss or
                        damage sustained by reason of any disclosure
                        (inadvertent or otherwise) of any Personal Information
                        concerning the User's account and / or information
                        relating to or regarding online transactions using
                        credit cards / debit cards /cash cards and / or their
                        verification process and particulars nor for any error,
                        omission or inaccuracy with respect to any information
                        so disclosed and used.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots className="hsection position-absolute svgwidth opacity-10" />
          <Line className="svgwidthline position-absolute opacity-10 top-20 end-0" />
        </section>
      </main>
    </>
  );
};

export default page;

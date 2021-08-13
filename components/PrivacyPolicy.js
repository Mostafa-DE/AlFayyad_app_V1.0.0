import styles from "@/styles/PrivacyPolicy.module.css";

function PrivacyPolicy() {
  return (
    <>
      <h1 className={styles.h1Text}>Privacy policy</h1>
      <div
        className={`text-start container ${styles.containerAllPrivacyPolicy}`}
      >
        <h5 className="text-uppercase">overview</h5>
        <p className="text-md-start">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from Al
          Fayyad (the “Site”).
        </p>
        <h5 className="text-uppercase">Personal Information we collect</h5>
        <p className="text-md-start">
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information”.
        </p>
        <p className="text-md-start">
          We collect Device Information using the following technologies:
        </p>
        <ul>
          <li>
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies and how to disable cookies, visit{" "}
            <a className={styles.link} href="https://www.allaboutcookies.org/">
              http://www.allaboutcookies.org
            </a>
          </li>
          <li>
            “Log files” track actions occurring on the Site and collect data,
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </li>
          <li>
            “Web beacons”, “tags”, and “pixels” are electronic files used to
            record information about how you browse the
          </li>
        </ul>
        <p className="text-md-start">
          Additionally, when you make a purchase or attempt to make a purchase
          through the Site, we collect certain information from you, including
          your name, billing address, shipping address, payment information,
          email address, and phone number. We refer to this information as
          “Order Information”.
        </p>
        <p className="text-md-start">
          All credit/debit card details and personally identifiable information
          will NOT be stored, sold, shared, rented or leased to any third
          parties.
        </p>
        <p className="text-md-start">
          When we mention “Personal Information” in this Privacy Policy, we are
          referring to Device Information and Order Information.
        </p>
        <h5>How do we use your Personal Information?</h5>
        <p className="text-md-start">
          We use the Order Information that we collect generally to fulfill any
          orders placed through the Site, including processing your payment
          information, arranging for shipping, and providing you with invoices
          and/or order confirmations. Additionally, we use this Order
          Information to:
        </p>
        <ul>
          <li>Communicate with you.</li>
          <li>Screen our orders for potential risk or fraud; and</li>
          <li>
            Depending on the preferences you share with us, provide you with
            information or advertising relating to our products or services
          </li>
        </ul>
        <p className="text-md-start">
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize the Site (for example, we use Google
          Analytics to understand how our customers browse and interact with the
          Site, and to assess the success of our marketing and advertising
          campaigns).
        </p>
        <h5>Sharing your Personal Information</h5>
        <p className="text-md-start">
          we may share your Personal Information to:
        </p>
        <ul>
          <li>Comply with applicable laws and regulations;</li>
          <li>
            Respond to a subpoena, search warrant or other lawful request for
            information we receive; and
          </li>
          <li>Protect our rights.</li>
        </ul>
        <h5>Do not track</h5>
        <p className="text-md-start">
          Please note that we do not alter the Site’s data collection and use
          practices when we see a Do Not Track signal from your browser.
        </p>
        <h5>Data retention</h5>
        <p className="text-md-start">
          When you place an order through the Site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>
        <h5>Changes </h5>
        <p className="text-md-start">
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>
        <h5>Contact us</h5>
        <p className="text-md-start">
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e‑mail at{" "}
          <a
            className={styles.link}
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
          >
            fayyadm524@gmail.com
          </a>{" "}
          or by using the details provided.
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;

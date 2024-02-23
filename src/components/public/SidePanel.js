import { FormattedMessage } from "react-intl";
import InfoText from "../InfoText";
import HLine from "../HLine";

export default function SidePanel() {
    return (
        <div className="sidepanel text-center">

        <div className="info">
            <h2 className="title">
              <FormattedMessage id="orderInfo.title" defaultMessage="Learn information about orders:" />
            </h2>

            <div className="contacts">
              <InfoText
                title={<FormattedMessage id="orderInfo.emailTitle" defaultMessage="Email for inquiries" />}
                value={"shop@tireshop.lv"}
                hasBolder={true}
              />
              <HLine />
              <InfoText
                title={<FormattedMessage id="orderInfo.phoneTitle" defaultMessage="Phone Number" />}
                value={"+371 25737000"}
                hasBolder={true}
              />
            </div>

            <small>
              <FormattedMessage
                id="orderInfo.additionalInfo"
                defaultMessage="For clarification of cooperation conditions or in case of specific questions, please contact your assigned manager."
              />
            </small>
            </div>

            <div className="managers">
              <div className="title">
                <p className="text-bold">
                  <FormattedMessage id="managers.yourManager" defaultMessage="Your manager:" />
                </p>
                <small>
                  <FormattedMessage
                    id="managers.wholesalePrices"
                    defaultMessage="(Wholesale prices and discounts)"
                  />
                </small>
              </div>

              <div className="managers-contacts">
                <center style={{ padding: "0 1em" }}>
                  <InfoText width={"100%"} title={<FormattedMessage id="managers.name" defaultMessage="Verds" />} value="Uldis Taurins" textAlign={"end"} />
                  <HLine margin={5} />
                  <InfoText
                    width={"100%"}
                    classNames={"contacts"}
                    title={<FormattedMessage id="managers.phoneNumber" defaultMessage="Phone Number" />}
                    value="+371 27008994"
                  />
                  <HLine margin={5} />
                  <InfoText
                    width={"100%"}
                    classNames={"contacts"}
                    title={<FormattedMessage id="managers.email" defaultMessage="Email" />}
                    value="support@tireshop.lv"
                  />
                </center>
              </div>
            </div>
        </div>
    );
}

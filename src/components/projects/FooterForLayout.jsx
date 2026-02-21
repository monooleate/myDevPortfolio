import { yourName } from "../../config/personalConfig";
import { FormattedMessage } from 'react-intl';

export default function FooterForLayout() {
    return (
        <footer className="bg-uni-fill border-t border-uni-border py-4 w-full text-sm">
            <p className="text-uni-muted text-center">
                &copy; {new Date().getFullYear()} {yourName.name}. <FormattedMessage id="footerRights" defaultMessage="All rights reserved." />
            </p>
        </footer>
    )
}

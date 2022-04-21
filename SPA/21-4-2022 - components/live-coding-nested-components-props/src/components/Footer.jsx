import { GeneralStatusMessage } from './GeneralStatusMessage';

export const Footer = ({status}) => {

	return <GeneralStatusMessage
		status={status}
		internalText="We stand on the shoulders of giants."
		externalText="&#169; <b>All</b> rights reserved."
	/>;
};
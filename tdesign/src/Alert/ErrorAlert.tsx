/** @jsxImportSource theme-ui */

import { Flex, Text } from "theme-ui";
import MutedLink from "../Link/MutedLink";

const ErrorHeading = () => {
  return <Text sx={{ marginRight: 2, fontWeight: "bold" }}>Error:</Text>;
};

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <>{message}</>;
};

interface ErrorResetLinkProps {
  text?: string;
  href?: string;
}

const ErrorResetLink = ({ text }: ErrorResetLinkProps) => (
  <MutedLink href={"#"}>{text}</MutedLink>
);

export interface ErrorAlertProps {
  message?: string;
  dismissLinkText?: string;
  dismissLinkHref?: string;
}

const ErrorAlert = ({
  message,
  dismissLinkText,
  dismissLinkHref,
}: ErrorAlertProps) => {
  const trimmedMessage = message ? message.replace(/Error\:?\s*/, "") : "";

  return (
    <Flex
      sx={{
        marginBottom: 4,
        justifyContent: "space-between",
        flexDirection: "row",
        minWidth: "30vw",
        backgroundColor: "white",
        backgroundOpacity: 0.2,
        border: "1px solid red",
        padding: 8,
      }}
    >
      <Flex sx={{ width: 7 / 10 }}>
        <ErrorHeading />
        <ErrorMessage message={trimmedMessage} />
      </Flex>

      {dismissLinkText && dismissLinkHref && (
        <Flex sx={{ width: 3 / 10, justifyContent: "flex-end" }}>
          <ErrorResetLink text={dismissLinkText} href={dismissLinkHref} />
        </Flex>
      )}
    </Flex>
  );
};

export default ErrorAlert;

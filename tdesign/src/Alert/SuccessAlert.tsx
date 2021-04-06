/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";
import MutedLink from "../Link/MutedLink";

const Checkmark = () => {
  return <Text sx={{ marginRight: 2, fontWeight: "bold" }}>&#10003;</Text>;
};

interface SuccessMessageProps {
  message?: string;
}

const SuccessMessage = ({ message }: SuccessMessageProps) => {
  return <>{message}</>;
};

interface ISuccessResetLinkProps {
  text?: string;
  href?: string;
  onClick: () => void;
}

const SuccessResetLink = ({ text, href }: ISuccessResetLinkProps) => (
  <MutedLink sx={{ color: "#fff" }} href={href || "#"}>
    {text}
  </MutedLink>
);

interface ISuccessAlertProps {
  message?: string;
  dismissLinkText?: string;
  dismissLinkHref?: string;
  onClickDismiss?: () => void;
  dismissLinkOwnRow?: boolean;
}

const SuccessAlert = ({
  message,
  dismissLinkText,
  dismissLinkHref = null,
  onClickDismiss,
  dismissLinkOwnRow = false,
}: ISuccessAlertProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2,
        marginBottom: 4,
        minWidth: "30vw",
        backgroundColor: "successBackground",
        backgroundOpacity: 0.2,
        border: "1px solid success",
        ...(dismissLinkOwnRow
          ? {
              flexWrap: "wrap",
            }
          : {}),
      }}
    >
      <Box
        sx={{
          display: "flex",
          // width: dismissLinkText && dismissLinkHref ? 7 / 10 : 10 / 10,
        }}
      >
        <Checkmark />
        <SuccessMessage message={message} />
      </Box>

      {dismissLinkText && (dismissLinkHref || onClickDismiss) && (
        <Box
          sx={{
            display: "flex",
            width: 3 / 10,
            flexGrow: 1,
            justifyContent: dismissLinkOwnRow ? "flex-start" : "flex-end",
          }}
        >
          {dismissLinkHref ? (
            <SuccessResetLink
              text={dismissLinkText}
              href={dismissLinkHref || "#"}
              onClick={onClickDismiss}
            />
          ) : (
            <Text
              sx={{
                color: "muted",
                ":hover": { cursor: "pointer", textDecoration: "underline" },
              }}
              onClick={onClickDismiss}
            >
              {dismissLinkText}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SuccessAlert;

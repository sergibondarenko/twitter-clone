export function postDoc({
  displayName,
  userName,
  wasVerified,
  text,
  imageLink,
  avatarLink
}) {
  return {
    displayName,
    userName,
    wasVerified,
    text,
    imageLink,
    avatarLink
  };
}
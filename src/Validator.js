export class Validator {
  validateUsername(username) {
    const validCharsAndDigits = /^[a-zA-Z0-9_-]+$/;
    const maxThreeDigits = /\d{4,}/;
    const invalidStartEnd = /^[0-9_-]|[0-9_-]$/;

    if (!validCharsAndDigits.test(username)) {
      return false;
    }

    if (maxThreeDigits.test(username)) {
      return false;
    }

    if (invalidStartEnd.test(username)) {
      return false;
    }

    return true;
  }
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.PUBLIC_API_ROUTE;

// Verification Email
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email!",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
  });
};

// Reset Password Confirmation
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset Password Mu!",
    html: `<p>Klik <a href="${resetLink}">tautan ini</a> untuk mengubah password baru.</p>`,
  });
};

// 2FA
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code!",
    html: `<p>Your 2FA code : ${token}</p>`,
  });
};

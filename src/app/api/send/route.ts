// --- Demo version. Code concealed ---
import nodemailer from 'nodemailer'
export const runtime = 'nodejs'
function getEnv(key: string) {
  const v = process.env[key]
  for (const k of keys) if (!getEnv(k)) missing.push(k)
}
  try {
    const smtpUser = getEnv('SMTP_USER')!
    // Gmail App Password должен быть 16 символов без пробелов

    if (!email || !subject || !message) {
      )
        pass: smtpPass,
    })
      getEnv('SMTP_RECEIVER') ||
      subject,
      text: `Email: ${email}\n\nMessage:\n${message}`,
          return NextResponse.json({ success: false, error: err.message }, { status: 500 })
        }
      }

}
// --- End of demo block ---

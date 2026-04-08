import { Resend } from 'resend';

const getContactEmailTemplate = (name, email, message) => {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Nuevo Mensaje de Contacto</title>
        </head>
        <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                <div style="background-color: #09090b; padding: 30px 24px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">⭐ Nuevo mensaje de tu Portafolio</h1>
                </div>
                <div style="padding: 40px 32px;">
                    <p style="color: #52525b; font-size: 16px; line-height: 1.6; margin-top: 0;">¡Hola <strong>Camilo</strong>! Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web personal.</p>
                    
                    <div style="background-color: #f4f4f5; border-radius: 8px; padding: 20px; margin: 28px 0; border-left: 4px solid #09090b;">
                        <p style="margin: 0 0 12px 0; font-size: 15px;"><strong style="color: #09090b; display: inline-block; width: 70px;">Nombre:</strong> <span style="color: #3f3f46;">${name}</span></p>
                        <p style="margin: 0; font-size: 15px;"><strong style="color: #09090b; display: inline-block; width: 70px;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                    </div>
                    
                    <div style="background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
                        <h3 style="margin: 0 0 16px 0; color: #09090b; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje de ${name}</h3>
                        <p style="color: #3f3f46; font-size: 16px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 40px;">
                        <a href="mailto:${email}" style="display: inline-block; background-color: #09090b; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 500; font-size: 15px; transition: opacity 0.2s;">Responder al mensaje</a>
                    </div>
                </div>
                <div style="background-color: #fafafa; padding: 20px; text-align: center; border-top: 1px solid #e4e4e7;">
                    <p style="color: #a1a1aa; font-size: 13px; margin: 0;">Enviado de forma segura desde la API de tu portafolio web.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

const resend = new Resend("re_B18V2rHr_B86PoFkqqPSZHXohkWgUNAhS");
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Faltan campos requeridos" }),
        { status: 400 }
      );
    }
    if (false) ;
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      // Update with your verify domain
      to: ["camiloterneraduque@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      html: getContactEmailTemplate(name, email, message)
    });
    if (error) {
      return new Response(
        JSON.stringify({ message: error.message }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ message: "Email enviado correctamente", id: emailData?.id }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(
      JSON.stringify({ message: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

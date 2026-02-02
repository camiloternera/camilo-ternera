
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { name, email, message } = data;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ message: 'Faltan campos requeridos' }),
                { status: 400 }
            );
        }

        // In a real scenario, you would validate the token/key
        if (!import.meta.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is missing");
            // Mock success for development if key is missing
            return new Response(
                JSON.stringify({ message: 'Simulación de envío exitosa (Falta API Key)' }),
                { status: 200 }
            );
        }

        const { data: emailData, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your verify domain
            to: ['camiloternera@example.com'], // Update with your email
            subject: `Nuevo mensaje de ${name}`,
            html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return new Response(
                JSON.stringify({ message: error.message }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Email enviado correctamente', id: emailData?.id }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Error interno del servidor' }),
            { status: 500 }
        );
    }
};

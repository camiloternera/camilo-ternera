
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { getContactEmailTemplate } from '@/lib/email-templates';

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
            to: [import.meta.env.CONTACT_TO_EMAIL],
            subject: `Nuevo mensaje de ${name}`,
            html: getContactEmailTemplate(name, email, message),
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
        console.error("Error in API route:", error);
        return new Response(
            JSON.stringify({ message: 'Error interno del servidor' }),
            { status: 500 }
        );
    }
};

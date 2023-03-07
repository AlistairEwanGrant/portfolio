<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class MailController extends Controller
{
    /**
     * Store a new user.
     *
     * @param Request $request
     *
     */

    public function store(Request $request)
    {
        $mail = new PHPMailer(true);

        $fullName = $request->input('fullName');
        $email = $request->input('email');
        $message = $request->input('message');

        $mailBody = 'New Lead Enquiry' . PHP_EOL . PHP_EOL .
            'Name: ' . $fullName . ' ' . PHP_EOL .
            'Message: ' . $message . ' ' . PHP_EOL .
            'Email: ' . $email;

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.ionos.co.uk';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = env('MY_EMAIL');                     //SMTP username
            $mail->Password   = env('MY_EMAIL_PASSWORD');          //SMTP password
            $mail->SMTPSecure = 'TLS/SSL';                              //Enable implicit TLS encryption
            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('alistair.grant@alistair-j-e-grant.co.uk', $fullName);
            $mail->addAddress(env('MY_EMAIL'));     //Add a recipient

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Message From Bio Page';
            $mail->Body    = $mailBody;

            $mail->send();
            return redirect('contact')->with('status', 'Mail Sent');
        } catch (Exception $e) {
            return redirect('contact')->with('status', $mail->ErrorInfo . env('MY_EMAIL'));
        }

    }
}

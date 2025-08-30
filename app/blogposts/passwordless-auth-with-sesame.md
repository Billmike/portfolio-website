# Passwordless Authentication: Thoughts on Sesame Auth

Author: Kayode Ayelegun

Updated: 30 Aug, 2025

For a while, passwordless authentication felt like the future everyone was waiting for. Phrases like “Goodbye passwords on the web” were everywhere. The idea was simple and appealing: no more forgotten passwords, no more sticky notes with logins, no more password managers, and fewer data breaches.

And to be fair, on mobile devices, we’ve gotten pretty close. Features like FaceID, TouchID, and fingerprint sensors already give us a taste of life without passwords. But on the web? Passwords still reign supreme.

That might change. Recently, I came across an [experimental technology developed by researchers at the University of England called Sesame Auth](https://www.mdpi.com/2624-800X/4/2/14). It’s an unusual but fascinating take on authentication that mixes together push notifications, public key cryptography, biometrics, and even [steganography](https://en.wikipedia.org/wiki/Steganography) (yes, hiding data inside images). The promise is to move us one step further away from the password status quo.

Let’s unpack how it works.

### The Building Blocks

Sesame Auth isn’t just a simple app; it’s an ecosystem. It consists of:
1. A mobile app (for setup and authentication)
2. The Sesame server (the brains of the operation)
3. A cloud database
4. A library and SDK that websites can use to integrate Sesame login

With those pieces in place, here’s the flow.

### Setting Up the App

When you download the Sesame mobile app, setup feels a little strange. You pick a username and then type in your email multiple time (three times or more). It feels redundant, but this is where something clever happens.

Sesame uses those repeated inputs to measure your **typing patterns**, a technique called [**Keystroke Dynamics**](https://en.wikipedia.org/wiki/Keystroke_dynamics). By analyzing things like how quickly you hit keys and the rhythm of your typing, it generates a kind of *typing fingerprint*. To do this, Sesame leverages a library called **TypingDNA**, which creates a unique ID tied to your typing style.

That ID gets baked into a **public key** that the app uses whenever it communicates with the Sesame server.

### Creating a New Login

Now you’re set up with the app. When you visit a website that supports Sesame, here’s how registration works:

1. You click “Register” and pick a username.
2. The website sends your request to the Sesame server.
3. The server generates a special download link for the app, which the site shows to you.
4. You click the link, and—assuming you already have the app installed, it opens and asks you to do something unusual.

Instead of creating a password, you’re asked to upload an image from your phone. After that, you confirm your identity with a biometric check (like FaceID or Fingerprint).

Here’s the twist though: Sesame takes that uploaded image, encrypts your Typing ID with a public key, embeds both into the image, and then sends the modified image back to your phone. To the naked eye, it’s the same picture. But hidden inside is your digital identity.

### Logging In

Let’s say you come back to that same website later. Here’s what login looks like:

1. You enter your username.
2. The site displays a six-digit code.
3. Almost instantly, you get a push notification from the Sesame app.
4. You tap it, the app asks for the six-digit code, and once you enter it—you’re in.

At first glance, this just looks like a standard **push notification login**. But the magic is in what happens behind the scenes.

When your app contacts the Sesame server, it includes that “secret” image. Inside the image, the server finds your Typing ID and public key. It then verifies that your Typing ID matches what it has stored (encrypted with its private key). If everything checks out, you’re successfully authenticated.

### Why This Is Interesting

Yes, on the surface this feels like a complicated way to achieve what push notifications already do. But Sesame Auth introduces some novel ideas:

1. **No passwords at all** – logins happen via notifications, codes, and biometrics.
2. **Typing biometrics as a backup** – instead of security questions or recovery codes, your typing style acts as a hidden factor of authentication.
3. **Steganography for credentials** – your identity data is tucked away inside images you own.

It’s unusual, maybe even a little over-engineered, but definitely creative.

### Final thoughts

Will Sesame Auth become the standard for passwordless authentication? Honestly, I doubt it. While it’s an interesting leap forward, it only feels like a slight improvement over today’s approaches. Push notifications, biometrics, and WebAuthn already solve many of the same problems with fewer moving parts.

That said, Sesame Auth shows just how many different directions authentication technology can go. And who knows? Sometimes it takes an odd, experimental approach to inspire the next breakthrough.

For now, passwords aren’t dead yet—but they’re definitely on notice.

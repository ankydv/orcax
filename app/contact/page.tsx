import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 py-16 md:flex-row md:py-24">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Contact
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Let&apos;s build something great together
          </h1>
          <p className="max-w-xl text-base text-default-600 md:text-lg">
            Have a question, a project idea, or just want to say hi? 
            Drop a message and a response will follow as soon as possible.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button
              as={Link}
              href="#contact-form"
              color="primary"
              radius="full"
              size="lg"
            >
              Send a message
            </Button>
            <Button
              as={Link}
              href="mailto:hello@example.com"
              variant="bordered"
              radius="full"
              size="lg"
            >
              Email directly
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-default-500 md:justify-start">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_6px_rgba(16,185,129,0.25)]" />
              <span>Typically replies within 1–2 hours</span>
            </div>
          </div>
        </div>

        {/* Side contact info card */}
        <Card className="mt-8 w-full max-w-md flex-1 md:mt-0">
          <CardHeader>
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Quick details</h2>
              <p className="text-sm text-default-500">
                Prefer another channel? Use any of the options below.
              </p>
            </div>
          </CardHeader>
          <CardBody className="space-y-4 text-sm">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-default-500">
                Email
              </p>
              <Link href="mailto:hello@example.com" className="text-sm">
                contact@orcaxmedia.in
              </Link>
            </div>

            {/* <div>
              <p className="text-xs font-medium uppercase tracking-wide text-default-500">
                Phone / WhatsApp
              </p>
              <Link href="tel:+911234567890" className="text-sm">
                +91 12345 67890
              </Link>
            </div> */}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-default-500">
                Location
              </p>
              <p className="text-sm text-default-600">
                We are digitally located, serving clients worldwide.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-default-500">
                Social
              </p>
              <div className="mt-1 flex flex-wrap gap-3">
                {/* <Link href="https://github.com/yourname" isExternal>
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/yourname" isExternal>
                  LinkedIn
                </Link> */}
                <Link href="https://www.instagram.com/orcaxmedia" isExternal>
                  Instagram
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="mx-auto max-w-3xl px-4 pb-20 md:pb-24"
      >
        <Card shadow="lg">
          <CardHeader>
            <div>
              <h2 className="text-xl font-semibold">Send a message</h2>
              <p className="mt-1 text-sm text-default-500">
                Fill in the details below and a reply will be sent to your inbox.
              </p>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Full name"
                  placeholder="John Doe"
                  variant="bordered"
                  radius="lg"
                  isRequired
                />
                <Input
                  label="Email"
                  placeholder="john@example.com"
                  type="email"
                  variant="bordered"
                  radius="lg"
                  isRequired
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Phone (optional)"
                  placeholder="+91 98765 43210"
                  type="tel"
                  variant="bordered"
                  radius="lg"
                />
                <Input
                  label="Subject"
                  placeholder="Project, question, or collaboration"
                  variant="bordered"
                  radius="lg"
                  isRequired
                />
              </div>

              <Textarea
                label="Message"
                placeholder="Share details about your idea, timeline, and any links…"
                minRows={4}
                variant="bordered"
                radius="lg"
                isRequired
              />

              <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-default-500">
                  By submitting, you agree to be contacted about your request.
                </p>
                <Button color="primary" size="lg" radius="full" type="submit">
                  Submit message
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

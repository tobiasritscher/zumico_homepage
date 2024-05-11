
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

export default function Home() {
  return (
    <>
      <header className= "bg-zumikon-bg text-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
            <img
              alt="Zumikon Concert Orchestra"
              className="w-40 h-40 md:w-40 md:h-40 lg:w-40 lg:h-40"
              height={80}
              src="/zumico_placeholder.PNG"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width={80}
            />
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Zumikon Concert Orchestra</h1>
            <p className="max-w-md text-center text-gray-300 md:text-lg lg:text-xl">
              Das Herz der Musik
            </p>
          </div>
        </div>
      </header>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 md:space-y-10 lg:space-y-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Nächste Auftritte</h2>
              <p className="mt-2 text-gray-600 md:text-lg lg:text-xl">
                Komm und geniesse unsere Musik live!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Muttertagsständchen</CardTitle>
                  <CardDescription>
                    Wir spielen ganz speziell zum Muttertag und hoffen allen eine Freude machen zu können
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <p>Sonntag 12.05.2024</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-5 w-5 text-gray-500" />
                    <p>11:30 - 12:30</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="h-5 w-5 text-gray-500" />
                    <p>Dorfplatz, Zumikon</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="https://calendar.clubdesk.com/clubdesk/ical/icsfile/24485/1000422/TUMwQ0ZHc1QxZnFHT0dvaC9Ha0EwaEhBOEFqZ3RZSURBaFVBak5vSUtYK2t1djY5WExOd2lSNHdkcDVXR3BzPQ/basic.ics">
                    <Button>Download</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jahreskonzert 2024 - Harmonie in der Sommerbrise</CardTitle>
                  <CardDescription>
                  Trotz Fussballfieber versuchen wir unser bestes zu geben. Ohne Ball, aber mit viel Freude und Begeisterung schiessen wir musikalische Tore. <br/> 
                  Wir freuen uns auf regen Besuch
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <p>Samstag 15.06.2024</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-5 w-5 text-gray-500" />
                    <p>20:00 - 23:00</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="h-5 w-5 text-gray-500" />
                    <p>Gemeindesaal Zumikon</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="https://calendar.clubdesk.com/clubdesk/ical/icsfile/24485/1000458/TUN3Q0ZBVWVZNWpDMkYwaXBMUU00eEhZU3BpOHpkejNBaFJQN0V2Vm1najI5Z1FUU21ySXB1UEVxeXhNdVE9PQ/basic.ics">
                    <Button>Download</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ZKMF Schlieren - Urdorf</CardTitle>
                  <CardDescription>
                    Die Harmonie Zumikon nimmt am Kantonalen Musikfest 2024 in Schlieren / Urdorf teil.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <p>Samstag 22.06.2024 - Sonntag 23.06.2024</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="h-5 w-5 text-gray-500" />
                    <p>Schlieren / Urdorf</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="https://www.harmonie-zumikon.ch/willkommen?b=1000137&c=ED1000445" target="_blank">
                    <Button>Mehr Infos</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 md:space-y-10 lg:space-y-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Triff das Orchester</h2>
              <p className="mt-2 text-gray-600 md:text-lg lg:text-xl">
                Lern unsere Musikanten kennen.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <img
                  alt="Musician 1"
                  className="h-48 w-full object-cover rounded-t-md"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent>
                  <h3 className="text-lg font-bold">René Doldt</h3>
                  <p className="text-gray-600">Posaune</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Musician 2"
                  className="h-48 w-full object-cover rounded-t-md"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Alin Häubi</h3>
                  <p className="text-gray-600">Querflöte</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Musician 3"
                  className="h-48 w-full object-cover rounded-t-md"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Tobias Ritscher</h3>
                  <p className="text-gray-600">Trompete</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Musician 4"
                  className="h-48 w-full object-cover rounded-t-md"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Martin Iseli</h3>
                  <p className="text-gray-600">Klarinette</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 md:space-y-10 lg:space-y-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Kontaktiere uns</h2>
              <p className="mt-2 text-gray-600 md:text-lg lg:text-xl">
                Falls du ein Instrument spielst und gerne bei uns mitspielen möchtest, oder einfach nur eine Frage hast, schreib uns!
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea className="min-h-[120px]" id="message" placeholder="Enter your message" />
                </div>
                <Button type="submit">Senden</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8 md:py-10 lg:py-12">
        <div className="container mx-auto justify-evenly px-4 md:px-6 lg:px-8 flex flex-row items-center space-y-4 md:space-y-6 lg:space-y-8">
          <div className="flex-row space-x-4 md:space-x-6 lg:space-x-8">
            <a href="mailto:info@harmonie-zumikon.ch?subject=%5BAnfrage%20Zumico%20Homepage%5D">
              <MailOutlineIcon />
            </a>
            <a href="https://www.instagram.com/hazu8126/" target="_blank">
              <InstagramIcon />
            </a>
          </div>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg">
            © 2024 Harmonie Zumikon. All rights reserved.
          </p>
          <div className="flex-row space-x-4 md:space-x-6 lg:space-x-8">
            <a href="https://www.harmonie-zumikon.ch/impressum" target="_blank">
              Impressum
            </a>
            <a href="https://www.harmonie-zumikon.ch/datenschutz" target="_blank">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

type classNameProps = {
  className: string;
}

const CalendarIcon = ({className}: classNameProps) => {
  return (
    <svg
      className = {className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


const ClockIcon = ({className}: classNameProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


const LocateIcon = ({className}: classNameProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


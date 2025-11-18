import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {Cake, Ghost, Check, Aperture, Gamepad2, CircleMinus, Bike, Ban } from "lucide-react";


export default function page() {
    return(
        <div>
            <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>

      <div>
         <Card className="w-full max-w-sm bg-teal-200  ">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">
            
            Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          <Check/>
          Login
        </Button>
        <Button variant="outline" className="w-full">
          <Aperture/>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
      </div>

            <div>
         <Card className="w-full max-w-sm bg-purple-500
           ">
      <CardHeader>
        <CardTitle>Hacer la compra del postre</CardTitle>
        <CardDescription>
          Llena los siguientes datos para confirmar el pedido
        </CardDescription>
        <CardAction>
          <Button variant="link">Entrar</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center ">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Olvidaaste tu contraseña?
                </a>
              </div >
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2  ">
        <Button type="submit" className="w-full">
          <Cake/>
          Hacer la compra
        </Button>
        <Button variant="outline" className="w-full">
          <CircleMinus/>
          Detener Compra
        </Button>
      </CardFooter>
    </Card>
      </div>




            <div>
         <Card className="w-full max-w-sm bg-blue-500  ">
      <CardHeader>
        <CardTitle>Completa el siguiente cuadro </CardTitle>
        <CardDescription>
          Para iniciar el juego completa el siguiente cuadro
        </CardDescription>
        <CardAction>
          <Button variant="link">Iniciar</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          <Gamepad2/>
          Iniciar Juego
        </Button>
        <Button variant="outline" className="w-full">
          <Ghost/>
          Por ahora no
        </Button>
      </CardFooter>
    </Card>
      </div>
      
            <div>
         <Card className="w-full max-w-sm bg-amber-300  ">
      <CardHeader>
        <CardTitle>Terminar compra </CardTitle>
        <CardDescription>
          Completa para terminar la compra y sacar a  domicilio
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          <Bike/>
          Empezar domicilio
        </Button>
        <Button variant="outline" className="w-full">
          <Ban/>
          Eliminar domicilio
        </Button>
      </CardFooter>
    </Card>
      </div>
      




        </div>
    )
}
import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type Props = {
  description: string,
}

export const Details = (props: Props) => {
    return (
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="shipping">Shipping Policy</TabsTrigger>
            <TabsTrigger value="return">Return Policy</TabsTrigger>

          </TabsList>

            <TabsContent value="description" className='h-[400px' >
              <Card className='bg-n lg:h-[300px]' >

                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <p>
                      {props.description}
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                </CardFooter>

              </Card>
            </TabsContent>
            
            <TabsContent value="shipping">
              <Card className='bg-n lg:h-[300px]'>
              <CardHeader>
                <CardTitle>Shipping Policy</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>
                    
                    Orders are typically processed and shipped within 24 hours. Once an order has been processed and shipped through Expedited Shipping, you will receive a shipping confirmation that contains the tracking number. Shipping takes:
                    -Between 2 to 4 business days to Europe.
                    -Between 3 to 5 business days to the USA and Canada.
                    -Between 4 to 8 business days to Australia.
                    

                    We offer a 30-day return policy for this gorgeous rug.
                    Your satisfaction is our priority.
                    We stand behind our products & service with confidence!
                    If you are not satisfied the product can be returned for exchange or full refund within 30 days from the date you receive your merchandise.
                  </p>
                </div>
              </CardContent>

              <CardFooter>
              </CardFooter>

              </Card>
            </TabsContent>

            <TabsContent value="return">
              <Card className='bg-n lg:h-[300px]'>
              <CardHeader>
                <CardTitle>Return Policy</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p>
                    We offer a 30-day return policy for this gorgeous rug.
                    Your satisfaction is our priority.
                    We stand behind our products & service with confidence!
                    If you are not satisfied the product can be returned for exchange or full refund within 30 days from the date you receive your merchandise.
                  </p>
                </div>
              </CardContent>

              <CardFooter>
              </CardFooter>

              </Card>
            </TabsContent>

        </Tabs>
      )
}

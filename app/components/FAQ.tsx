import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

type Props = {}

const FAQ = (props: Props) => {
  return (
    <div>

      <div className=" items-center justify-center p-10 text-slate-900 w-[70vw] mx-auto">

        <div>
          <h1 className='text-center font-semibold text-xl pb-2'>FAQ's</h1>
          <hr className='py-3'/>
        </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">About Us</AccordionTrigger>
                          <AccordionContent>
                            <p className='text-slate-900'>
                              easdlasldjl
                            </p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">About Us</AccordionTrigger>
                          <AccordionContent>
                            <p className='text-slate-900'>
                              easdlasldjl
                            </p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">About Us</AccordionTrigger>
                          <AccordionContent>
                            <p className='text-slate-900'>
                              easdlasldjl
                            </p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

      </div>

    </div>
  )
}

export default FAQ
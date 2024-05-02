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
                          <AccordionTrigger className="text-lg">Why Choose Us?</AccordionTrigger>
                          <AccordionContent className='text-left space-y-2'>
                              <p>
                                Direct Sourcing: Through our direct partnerships with Moroccan artisans, each rug is authentically handcrafted, ensuring genuine design and superior quality.
                              </p>
                              <p>
                                Quality Assurance: Prior to listing for sale, every rug undergoes a rigorous inspection process, guaranteeing it meets our exacting standards.
                              </p>
                              <p>
                                Transparent Pricing: By cutting out middlemen, we offer competitive prices, ensuring you get the best value for your investment.
                              </p>
                              <p>
                                Supporting Local Artisans: Your purchase directly supports the sustainable livelihoods of Moroccan craftsmen, ensuring the preservation of this time-honored tradition.
                              </p>
                              <p>
                                Customer Care: Our dedicated team is readily available to provide information, address inquiries, and assist with every step of your purchasing journey.
                              </p>

                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">Why Handmade?</AccordionTrigger>
                          <AccordionContent className='text-left space-y-2'>
                            <div className='text-slate-900 space-y-2'>
                              <p>
                                Durability: While inexpensive machine-made rugs may deteriorate quickly, handmade rugs are meticulously crafted to withstand the test of time, ensuring a long-lasting investment.
                              </p>
                              <p>
                                Unique Aesthetics: Mass-produced rugs lack the genuine charm and individuality found in artisan-crafted pieces. Each handmade rug is a distinct masterpiece with its own narrative.
                              </p>
                              <p>
                                Eco-Impact: Many machine-made rugs are manufactured using unsustainable methods, whereas handmade rugs often incorporate natural materials, making them a more environmentally conscious option.
                              </p>
                              <p>
                                Supporting Craftsmanship: Opting for a handmade rug directly benefits traditional artisans, their families, and their cultural heritage, contrasting with the questionable labor practices associated with machine-made rug production.
                              </p>
                              <p>
                                Value & Trust: Handmade rugs can maintain or appreciate in value over time. Choosing a handmade rug, particularly from a reputable source like Benisouk, ensures authenticity and superior quality.                            
                              </p>  
                          </div>                        
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">How do care for my Rug?</AccordionTrigger>
                          <AccordionContent className='text-left space-y-2'>
                            <p className='text-slate-900'>                              
                              Regularly vacuum your rug using a low-power setting to maintain its cleanliness. In case of spills, promptly blot them with a clean cloth. For thorough cleaning, we suggest opting for professional rug cleaning services.
                            </p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">Are these handmade?</AccordionTrigger>
                          <AccordionContent className='text-left space-y-2'>
                            <p className='text-slate-900'>
                              Indeed, every Moroccan vintage rug is meticulously hand-woven by skilled artisans, employing time-honored techniques. This meticulous process ensures that each piece is distinctive and showcases the esteemed heritage of Moroccan craftsmanship.
                            </p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">Can the handmade rugs have imperfections?</AccordionTrigger>
                          <AccordionContent className='text-left space-y-2'>
                            <p className='text-slate-900'>
                              Handcrafted rugs bear the mark of the artisan's hand, with each piece displaying individual variations. These distinctive nuances embody authentic craftsmanship, rendering each rug truly unique.
                            </p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">Are the colors rendered exactly how I see them online?</AccordionTrigger>
                          <AccordionContent className='text-left space-y-2'>
                            <p className='text-slate-900'>
                              Our skilled photographers employ advanced equipment and natural lighting to ensure precise depiction of each rug's colors, maintaining stringent standards. However, minor deviations may arise due to varying screen settings. We advise examining the rug under different lighting conditions upon receipt to fully appreciate its hues. Should you have any color-related inquiries, our customer support team is available to provide assistance.
                            </p>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>



      </div>

    </div>
  )
}

export default FAQ
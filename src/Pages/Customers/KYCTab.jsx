import React from 'react'
import PNG from "../../assets/Png.png"
import PDF from "../../assets/Pdf.png"

const KycTab = () => {
    return (
        <section>
            <div className='bg-white py-6 rounded-b-lg shadow-lg'>
                <span className=''>
                    <p className='px-6 font-semibold'>
                        KYC
                    </p>
                    <p className='px-6'>
                        This information can not  be created and edited
                    </p>
                </span>

                <div className='grid grid-cols-2 gap-8 px-6 laptop:w-1/2 mt-4'>
                    <span className='text-center p-4 rounded-lg border border-[#85BC2C] border-dashed'>
                        <img src={PDF} className='mx-auto my-2' alt='PDF' />
                        <p className='font-semibold'>
                            Offer Letter.pdf
                        </p>
                        <button className='text-[#85BC2C]'>
                            View File
                        </button>
                    </span>
                    <span className='text-center p-4 rounded-lg border border-[#85BC2C] border-dashed'>
                        <img src={PNG} className='mx-auto my-2' alt='PNG' />
                        <p className='font-semibold'>
                            Drivers License.png
                        </p>
                        <button className='text-[#85BC2C]'>
                            View File
                        </button>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default KycTab
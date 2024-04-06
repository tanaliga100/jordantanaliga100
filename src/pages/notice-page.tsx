import { useState } from "react";

type IProps = {
  closeModal: () => void;
  agreedHandler?: () => void;
}

export default function OnboardingModal({ closeModal }: IProps) {
  
  // state
  // const [agreed, setAgreed] = useState<boolean>(false)
  // useEffect(() => { 
  // }, [])
const [agreed, setAgreed] = useState<boolean>(false)
 
   function agreedToClose() { 
    setAgreed(!agreed)
  }

  return (
    <div className="relative  z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
      
      <div className="min-h-[50dvh] my-auto relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title"> Non-Disclosure Agreement (NDA):</h3>
              <div className="mt-2">
                 <h1>
     
      </h1>
      <p className="text-sm text-gray-500 border-2 p-2 bg-gray-300 md:bg-transparent md:border-none">
                      This portfolio may <span className="font-bold text-orange-500 "> NOT  </span>contain work samples that are subject to non-disclosure agreements (NDAs) with clients or employers. So if you want to 
                      know more about my work experiences feel free to message me on my email account <span className="text-md font-bold ">jordantanaliga@gmail.com</span>
      </p>
                  </div>
                   <div className="flex flex-col justify-center items-center md:flex-row md:items-start md:justify-start gap-2 mt-5 md:gap-3 ">
                    <input type="checkbox" onChange={() => agreedToClose()} />
              <p className="text-xs font-thin md:font-bold text-red-500 space-x-0 ">I have agreed on terms and agreements</p>
              </div>
            </div>
          </div>
        </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
             
              <button type="button" className={`inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm border-2 sm:ml-3 sm:w-auto tracking-widest ${!agreed ? "bg-transparent text-black text-white/50  border-2" : 'bg-red-600'}`
              
              } disabled={!agreed} onClick={closeModal}>{ !agreed ? "Disabled" : "Proceed"}</button>
              {/* <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button> */}
             
            </div>
            
      </div>
    </div>
  </div>
</div>
  )
}



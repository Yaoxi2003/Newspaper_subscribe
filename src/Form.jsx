import { useState } from "react"

export default function Form(props) {
    const [subscribe, setSubsribe] = useState(false)
    const [email, setEmail] = useState('')

    function emailForm(formData) {
        setEmail(prev =>  
        <strong>{prev}{formData.get('email')}</strong>)
        setSubsribe(prev => !prev)
    }
    function eventHandle() {
        setSubsribe(prev => !prev)
        setEmail(prev => '')
    }

    return (
        <>
        {!subscribe && <article className="flex flex-col rounded-xl min-w-[320px] max-w-[375px] w-9/10 bg-white 
        md:flex-row md:justify-between md:p-6 md:min-w-[700px] md:max-w-[900px]">
            <div className="flex flex-col gap-7 p-8">
                <h1 className="text-4xl font-bold md:text-5xl">{props.title}</h1>
                <h3 className="text-base leading-[1.3]">{props.subtitle}</h3>
                <ul>
                    <li className="flex mb-2 items-start"><img src={props.listIcon} alt="dot point" className="mr-2" />{props.listPoints[0]}</li>
                    <li className="flex mb-2 items-start"><img src={props.listIcon} alt="dot point" className="mr-2" />{props.listPoints[1]}</li>
                    <li className="flex mb-2 items-start"><img src={props.listIcon} alt="dot point" className="mr-2" />{props.listPoints[2]}</li>
                </ul>
                <form action={emailForm} className="w-full">
                    <label htmlFor={props.type} className="text-sm font-bold">Email address</label>
                    <input className="border border-slate-300 rounded-lg w-full mb-[1.5em] py-[1em] px-[1.5em]" type={props.type} name={props.type} placeholder="email@company.com" required/>
                    <button className="btn">{props.btnSubmit}</button>
                </form>
            </div>
            {/* mobile version */}
            <img src={props.mobileImg} alt="background image" className="order-first w-full rounded-t-xl object-cover md:hidden"/>
            {/* tablet version */}
            <img src={props.tabletImg} alt="background image" className="hidden object-cover md:block md:w-1/2 rounded-xl object-top"/>
        </article>}

        {subscribe && <section className="flex flex-col gap-7 p-8 rounded-xl bg-white shadow w-8/10 max-w-[400px]">
            <img src={props.successIcon} className="w-[4em] h-[4em]" alt="A success icon" />
            <h1 className="text-4xl font-bold">{props.successTitle}</h1>
            <p className="text-base leading-[1.3]">A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
            <button className="btn" onClick={eventHandle}>{props.btnDimiss}</button>
        </section>}
        </>
    )

}

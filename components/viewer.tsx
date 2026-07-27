"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import {
  ArrowLeft,
  Loader2,
  FileWarning,
  ExternalLink,
  ChartLine,
  Wallet,
  Pill,
  Bed,
  Clock3,
  Target,
  Activity,
  Scissors,
  Users,
  Boxes,
  Stethoscope,
  Receipt,
  FlaskConical,
  HeartPulse,
  CalendarDays,
  FileSearch,
  LucideIcon,
} from "lucide-react"

import { getReports, type Report } from "@/services/reports"


type LoadedReport = Report & {
  id: string
}


const ICONS: Record<string, LucideIcon> = {
  ChartLine,
  Wallet,
  Pill,
  Bed,
  Clock3,
  Target,
  Activity,
  Scissors,
  Users,
  Boxes,
  Stethoscope,
  Receipt,
  FlaskConical,
  HeartPulse,
  CalendarDays,
  FileSearch,
}


export default function Viewer() {

  const [loading, setLoading] = useState(true)
  const [report, setReport] = useState<LoadedReport | null>(null)


  useEffect(() => {

    async function load() {

      const params = new URLSearchParams(window.location.search)

      const bi = params.get("bi") ?? "farmacia"

      const reports = await getReports()


      if (reports[bi]) {

        setReport({
          id: bi,
          ...reports[bi],
        })

      }

      setLoading(false)

    }


    load()

  }, [])



  /*
  ============================
  LOADING
  ============================
  */

  if (loading) {

    return (

      <div className="flex h-dvh flex-col bg-[#f8faf9]">


        <header
          className="
          flex h-20 items-center border-b border-emerald-100 bg-white px-6 shadow-sm " >

          <div className="h-10 w-32 animate-pulse rounded bg-gray-100"/>

        </header>



        <main
          className="
          flex flex-1
          items-center
          justify-center
          "
        >

          <div className="flex flex-col items-center gap-4">


            <Loader2
              size={38}
              className="
              animate-spin
              text-[#12A874]
              "
            />


            <span
              className="
              text-sm
              font-medium
              text-gray-500
              "
            >
              Carregando indicadores...
            </span>


          </div>


        </main>


      </div>

    )

  }



  /*
  ============================
  NOT FOUND
  ============================
  */


  if (!report) {

    return (

      <div
        className="
        flex h-dvh
        items-center
        justify-center
        bg-[#f8faf9]
        "
      >

        <div
          className="
          flex max-w-sm
          flex-col
          items-center
          gap-5
          text-center
          "
        >


          <div
            className="
            flex h-16 w-16
            items-center justify-center
            rounded-2xl
            bg-red-50
            ring-1 ring-red-100
            "
          >

            <FileWarning
              className="text-red-500"
              size={30}
            />

          </div>



          <div>

            <h2
              className="
              text-lg
              font-semibold
              text-[#005C4D]
              "
            >
              Relatório não encontrado
            </h2>


            <p className="mt-2 text-sm text-gray-500">

              O painel solicitado não existe.

            </p>


          </div>




          <button

            onClick={() => window.history.back()}

            className="
            flex items-center gap-2
            rounded-xl
            bg-[#12A874]
            px-5 py-2.5
            text-sm font-medium
            text-white
            transition
            hover:bg-[#0d8c61]
            "

          >

            <ArrowLeft size={16}/>

            Voltar

          </button>



        </div>


      </div>

    )

  }



  const Icon = report.icone
    ? ICONS[report.icone]
    : null



  /*
  ============================
  VIEWER
  ============================
  */


  return (

    <div
      className="
      flex h-dvh
      flex-col
      bg-[#f8faf9]
      "
    >



      <header
        className="
        flex h-20
        shrink-0
        items-center
        justify-between
        border-b
        border-emerald-100
        bg-white
        px-5
        shadow-sm
        sm:px-8
        "
      >


        <div
          className="
          flex min-w-0
          items-center
          gap-4
          "
        >



          <button

            onClick={() => window.history.back()}

            className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-gray-500
            transition
            hover:bg-emerald-50
            hover:text-[#12A874]
            "

          >

            <ArrowLeft size={20}/>

          </button>




          <div
            className="
            hidden
            h-10
            w-px
            bg-emerald-100
            sm:block
            "
          />



          <Image

            src="/logo.png"

            alt="Nova Benê"

            width={120}

            height={45}

            className="
            hidden
            object-contain
            sm:block
            "

          />



          <div className="hidden h-10 w-px bg-emerald-100 sm:block"/>



          {
            Icon && (

              <div
                className="
                flex
                h-11 w-11
                items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-[#12A874]
                to-[#F37336]
                text-white
                shadow-sm
                "
              >

                <Icon size={22}/>

              </div>

            )
          }




          <div className="min-w-0">


            <h1
              className="
              truncate
              text-base
              font-semibold
              text-[#005C4D]
              sm:text-lg
              "
            >

              {report.titulo}

            </h1>



            {
              report.descricao && (

                <p
                  className="
                  truncate
                  text-xs
                  text-gray-500
                  sm:text-sm
                  "
                >

                  {report.descricao}

                </p>

              )
            }


          </div>


        </div>





        <div
          className="
          flex
          items-center
          gap-2
          "
        >


          {
            report.grupo && (

              <span
                className="
                hidden
                rounded-full
                bg-emerald-50
                px-3 py-1.5
                text-xs
                font-semibold
                text-[#008B68]
                ring-1
                ring-emerald-100
                sm:block
                "
              >

                {report.grupo}

              </span>

            )
          }




          <a

            href={report.url}

            target="_blank"

            rel="noopener noreferrer"

            className="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-gray-500
            transition
            hover:bg-orange-50
            hover:text-[#F37336]
            "

          >

            <ExternalLink size={18}/>

          </a>


        </div>


      </header>





      <main
        className="
        min-h-0
        flex-1
        p-3
        "
      >


        <div
          className="
          h-full
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-lg
          ring-1
          ring-emerald-100
          "
        >

          <iframe

            src={report.url}

            title={report.titulo}

            className="
            h-full
            w-full
            border-0
            "

            allowFullScreen

          />


        </div>


      </main>


    </div>

  )
}

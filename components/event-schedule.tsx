"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, Clock } from "lucide-react"
import { useState } from "react"

interface ScheduleItem {
  time: string
  activity: string
  category?: string
  duration?: string
  color?: string
}

interface EventScheduleProps {
  eventDate: string
  eventTitle: string
  eventId: string
}

const scheduleData: ScheduleItem[] = [
  {
    time: "09:00",
    activity: "Check-in - Men's Physique Class A",
    category: "Check-in",
    duration: "1 hora",
    color: "bg-blue-500/20 border-blue-500/30",
  },
  {
    time: "09:00",
    activity: "Check-in - Men's Physique Class B",
    category: "Check-in",
    duration: "1 hora",
    color: "bg-blue-500/20 border-blue-500/30",
  },
  {
    time: "10:00",
    activity: "Check-in - Bikini Fitness",
    category: "Check-in",
    duration: "1 hora",
    color: "bg-blue-500/20 border-blue-500/30",
  },
  {
    time: "10:00",
    activity: "Check-in - Women's Wellness",
    category: "Check-in",
    duration: "1 hora",
    color: "bg-blue-500/20 border-blue-500/30",
  },
  {
    time: "10:00",
    activity: "Check-in - Women's Figure",
    category: "Check-in",
    duration: "1 hora",
    color: "bg-blue-500/20 border-blue-500/30",
  },
  {
    time: "10:00",
    activity: "Check-in - Classic Physique",
    category: "Check-in",
    duration: "1 hora",
    color: "bg-blue-500/20 border-blue-500/30",
  },
  {
    time: "10:30",
    activity: "Pre-judging - Men's Physique Class A",
    category: "Pre-judging",
    duration: "45 min",
    color: "bg-amber-500/20 border-amber-500/30",
  },
  {
    time: "11:15",
    activity: "Pre-judging - Men's Physique Class B",
    category: "Pre-judging",
    duration: "45 min",
    color: "bg-amber-500/20 border-amber-500/30",
  },
  {
    time: "12:00",
    activity: "Pre-judging - Classic Physique",
    category: "Pre-judging",
    duration: "45 min",
    color: "bg-amber-500/20 border-amber-500/30",
  },
  {
    time: "12:00",
    activity: "Almuerzo (Break)",
    category: "Break",
    duration: "1.5 horas",
    color: "bg-green-500/20 border-green-500/30",
  },
  {
    time: "13:30",
    activity: "Pre-judging - Bikini Fitness",
    category: "Pre-judging",
    duration: "45 min",
    color: "bg-amber-500/20 border-amber-500/30",
  },
  {
    time: "14:15",
    activity: "Pre-judging - Women's Wellness",
    category: "Pre-judging",
    duration: "45 min",
    color: "bg-amber-500/20 border-amber-500/30",
  },
  {
    time: "15:00",
    activity: "Pre-judging - Women's Figure",
    category: "Pre-judging",
    duration: "45 min",
    color: "bg-amber-500/20 border-amber-500/30",
  },
  {
    time: "15:45",
    activity: "Break & Preparation",
    category: "Break",
    duration: "1 hora",
    color: "bg-green-500/20 border-green-500/30",
  },
  {
    time: "16:45",
    activity: "Opening Ceremony",
    category: "Ceremony",
    duration: "15 min",
    color: "bg-purple-500/20 border-purple-500/30",
  },
  {
    time: "17:00",
    activity: "Finals - All Categories",
    category: "Finals",
    duration: "3 horas",
    color: "bg-red-500/20 border-red-500/30",
  },
  {
    time: "20:00",
    activity: "Award Ceremony & Closing",
    category: "Ceremony",
    duration: "30 min",
    color: "bg-purple-500/20 border-purple-500/30",
  },
]

const categoryColors = {
  "Check-in": "text-blue-400",
  "Pre-judging": "text-amber-400",
  Break: "text-green-400",
  Finals: "text-red-400",
  Ceremony: "text-purple-400",
}

export function EventSchedule({ eventDate, eventTitle, eventId }: EventScheduleProps) {
  const [downloadingPDF, setDownloadingPDF] = useState(false)

  const handleDownloadPDF = () => {
    setDownloadingPDF(true)
    setTimeout(() => {
      alert(`PDF Schedule for ${eventTitle} is ready to download!`)
      setDownloadingPDF(false)
    }, 1000)
  }

  const handleAddToCalendar = () => {
    const eventStartDate = "20250315T090000"
    const eventEndDate = "20250315T200000"
    const descEnc = "Campeonato Nacional IFBB Argentina 2025 - Full day event"
    const locEnc = "Teatro Gran Rex, Buenos Aires, Argentina"

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventStartDate}/${eventEndDate}&location=${locEnc}&description=${descEnc}`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Event Schedule (Cronograma)</h2>
          <p className="text-muted-foreground">Complete timeline for all categories and activities</p>
        </div>
        <div className="flex gap-3 flex-wrap sm:flex-nowrap">
          <Button
            variant="outline"
            className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] bg-transparent"
            onClick={handleDownloadPDF}
            disabled={downloadingPDF}
          >
            <Download className="w-4 h-4 mr-2" />
            {downloadingPDF ? "Generating..." : "Download PDF"}
          </Button>
          <Button
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
            onClick={handleAddToCalendar}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Add to Calendar
          </Button>
        </div>
      </div>

      <div className="glass-card p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-foreground mb-4">Activity Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500/30 border border-blue-500/50"></div>
            <span className="text-sm text-muted-foreground">Check-in</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500/30 border border-amber-500/50"></div>
            <span className="text-sm text-muted-foreground">Pre-judging</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500/30 border border-green-500/50"></div>
            <span className="text-sm text-muted-foreground">Break</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500/30 border border-red-500/50"></div>
            <span className="text-sm text-muted-foreground">Finals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple-500/30 border border-purple-500/50"></div>
            <span className="text-sm text-muted-foreground">Ceremony</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 sm:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B78B1E] via-[#8B5CF6] to-[#B78B1E] rounded-full"></div>

        <div className="space-y-4 pl-8 sm:pl-32">
          {scheduleData.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 sm:-left-[5.5rem] top-2 w-4 h-4 rounded-full bg-[#B78B1E] border-4 border-background z-10"></div>

              <div
                className={`glass-card p-5 rounded-xl border border-border transition-all hover:shadow-lg hover:border-[#B78B1E]/50 ${item.color}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-[#B78B1E] min-w-fit">{item.time}</span>
                      {item.category && (
                        <Badge
                          variant="outline"
                          className={`${categoryColors[item.category as keyof typeof categoryColors]} border-current/30 text-xs`}
                        >
                          {item.category}
                        </Badge>
                      )}
                    </div>
                    <p className="text-foreground font-medium leading-snug">{item.activity}</p>
                  </div>
                  {item.duration && (
                    <div className="text-sm text-muted-foreground flex items-center gap-1 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative pl-8 sm:pl-32 mt-6">
          <div className="absolute -left-10 sm:-left-[5.5rem] top-2 w-4 h-4 rounded-full bg-[#B78B1E] border-4 border-background z-10"></div>
          <div className="glass-card p-5 rounded-xl border border-[#B78B1E]/30 bg-[#B78B1E]/10">
            <p className="text-foreground font-bold text-lg">Event End</p>
            <p className="text-sm text-muted-foreground">20:30 - Venue Closes</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3">Check-in Details</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>- Arrive 15 minutes before your scheduled time</li>
            <li>- Bring valid ID and registration confirmation</li>
            <li>- Weigh-in required during check-in</li>
            <li>- Upload music if not done already</li>
            <li>- Confirm posing routine details</li>
          </ul>
        </div>

        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-lg font-bold text-foreground mb-3">Important Notes</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>- Schedule subject to changes (TBA)</li>
            <li>- Finals order determined by pre-judging</li>
            <li>- Lunch break is mandatory for judges & staff</li>
            <li>- Ceremony starts promptly at scheduled time</li>
            <li>- All times are local (Buenos Aires)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
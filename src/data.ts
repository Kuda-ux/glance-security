import {
  Shield,
  Video,
  Calendar,
  ClipboardCheck,
  Lock,
  UserSearch,
  Clock,
  Users,
  SlidersHorizontal,
  Eye,
  Briefcase,
  Building2,
  Home,
  PartyPopper,
  ShoppingBag,
  Landmark,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  image: string
  objectPosition?: string
  icon: LucideIcon
}

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export interface Industry {
  title: string
  icon: LucideIcon
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why GSS', href: '#why-gss' },
  { label: 'Contact', href: '#contact' },
]

export const phone = '0712008941'

export const services: Service[] = [
  {
    id: 'security-guard-services',
    title: 'Security Guard Services',
    description:
      'Professional security personnel providing protection for properties, people and operations.',
    image: '/images/glance-guard.png',
    objectPosition: 'object-[center_45%]',
    icon: Shield,
  },
  {
    id: 'video-surveillance',
    title: 'Video Surveillance',
    description:
      'Monitoring and surveillance solutions designed to help maintain visibility and security.',
    image: '/images/surveillance-cameras.jpg',
    icon: Video,
  },
  {
    id: 'event-security',
    title: 'Event Security',
    description: 'Professional security support for events and gatherings.',
    image: '/images/event-guard.jpg',
    icon: Calendar,
  },
  {
    id: 'receipt-checking',
    title: 'Receipt Checking',
    description:
      'Security personnel supporting controlled access and receipt verification processes.',
    image: '/images/access-control.jpg',
    icon: ClipboardCheck,
  },
  {
    id: 'armed-guards',
    title: 'Armed Guards',
    description: 'Specialised armed security services where required and legally applicable.',
    image: '/images/glance-baton.png',
    objectPosition: 'object-[center_30%]',
    icon: Lock,
  },
  {
    id: 'undercover-security',
    title: 'Undercover Security',
    description: 'Discreet security personnel and specialised security support.',
    image: '/images/glance-patrol.png',
    objectPosition: 'object-[center_32%]',
    icon: UserSearch,
  },
]

export const whyGSS: Feature[] = [
  {
    title: 'Skilled Security Personnel',
    description: 'Knowledgeable security officers focused on professional service.',
    icon: Users,
  },
  {
    title: 'Tailored Solutions',
    description:
      'Security services can be structured around individual client requirements.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Around-the-Clock Support',
    description: 'Our security officers are available around the clock.',
    icon: Clock,
  },
  {
    title: 'Comprehensive Security',
    description:
      'Multiple security services rather than relying on one security approach.',
    icon: Shield,
  },
]

export const trustPoints = [
  {
    icon: Shield,
    label: 'Professional Security Personnel',
  },
  {
    icon: SlidersHorizontal,
    label: 'Tailored Security Solutions',
  },
  {
    icon: Clock,
    label: 'Around-the-Clock Availability',
  },
  {
    icon: Eye,
    label: 'Security-Focused Service',
  },
]

export const industries: Industry[] = [
  { title: 'Corporate & Office', icon: Briefcase },
  { title: 'Commercial Properties', icon: Building2 },
  { title: 'Residential Security', icon: Home },
  { title: 'Events', icon: PartyPopper },
  { title: 'Retail Environments', icon: ShoppingBag },
  { title: 'Facilities & Institutions', icon: Landmark },
]

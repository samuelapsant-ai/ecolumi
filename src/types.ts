export interface TimelineEvent {
  id: string;
  stepNumber: string;
  title: string;
  dateOrStatus: string;
  description: string;
  confirmed: boolean;
}

export interface HowWeDoStep {
  id: string;
  number: string;
  verb: string;
  description: string;
  details: string;
}

export interface ImpactDimension {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

export interface ImpactMetric {
  id: string;
  value: string;
  unit: string;
  label: string;
  status: string;
}

export interface LampPhoto {
  id: string;
  title: string;
  caption: string;
  alt: string;
  imageSrc: string;
  tag: string;
}

export interface TechnicalSpecItem {
  label: string;
  value: string;
  editableNote?: string;
}

export interface ParticipationMethod {
  id: string;
  title: string;
  description: string;
  badge: string;
}

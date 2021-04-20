export interface DateTimeFormatOptions {
  dateStyle?: "full" | "long" | "medium" | "short";
  timeStyle?: "full" | "long" | "medium" | "short";
  calendar?:
    | "buddhist"
    | "chinese"
    | "coptic"
    | "ethiopia"
    | "ethiopic"
    | "gregory"
    | "hebrew"
    | "indian"
    | "islamic"
    | "iso8601"
    | "japanese"
    | "persian"
    | "roc";
  dayPeriod?: "narrow" | "short" | "long";
  numberingSystem?:
    | "arab"
    | "arabext"
    | "bali"
    | "beng"
    | "deva"
    | "fullwide"
    | "gujr"
    | "guru"
    | "hanidec"
    | "khmr"
    | "knda"
    | "laoo"
    | "latn"
    | "limb"
    | "mlym"
    | "mong"
    | "mymr"
    | "orya"
    | "tamldec"
    | "telu"
    | "thai"
    | "tibt";
  localeMatcher?: "best fit" | "lookup";
  timeZone?: string;
  hour12?: boolean;
  hourCycle?: "h11" | "h12" | "h23" | "h24";
  formatMatcher?: "best fit" | "basic";
  weekday?: "long" | "short" | "narrow";
  era?: "long" | "short" | "narrow";
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  second?: "numeric" | "2-digit";
  fractionalSecondDigits?: 0 | 1 | 2 | 3;
  timeZoneName?: "long" | "short";
}

export interface IScreenshotsResults {
  height: number;
  id: number;
  image: string;
  is_deleted: boolean;
  width: number;
}

export interface IScreenshots {
  count: number;
  next: any;
  previous: any;
  results: IScreenshotsResults[];
}

// export interface IGame {
//   achievements_count: number;
//   added: number;
//   added_by_status: any{};
//   additions_count: number;
//   alternative_names: string[];
//   background_image: string,

//   background_image_additional: string,

//   clip: any
//   creators_count: number
//   description: string
//   description_raw: string
//   developers: any[]
//   dominant_color: string
//   esrb_rating: any{}
//   game_series_count: number
//   genres: any[]
//   id: number
//   metacritic: number
//   metacritic_platforms: any[]
//   metacritic_url: string
//   movies_count: number
//   name: string
//   name_original: string
//   parent_achievements_count: number
//   parent_platforms: any[]
//   parents_count: number
//   platforms: any[]
//   playtime: number
//   publishers: any[]
//   rating: number
//   rating_top: number
//   ratings: any[]
//   ratings_count: number
//   reactions: any{}
//   reddit_count: number
//   reddit_description: string
//   reddit_logo: string
//   reddit_name: string
//   reddit_url: string
//   released: string
//   reviews_count: number
//   reviews_text_count: number
//   saturated_color: string
//   screenshots_count: number
//   slug: string
//   stores: any[]
//   suggestions_count: number
//   tags: any[]
//   tba: boolean
//   twitch_count: number
//   updated: string
//   user_game: any
//   website: string
//   youtube_count: number
// }

export interface Bike {
  date_stolen?: number;
  description?: string;
  frame_colors: string[];
  frame_model?: string;
  id: number;
  is_stock_img: boolean;
  large_img?: string;
  location_found?: string;
  manufacturer_name: string;
  external_id: any;
  registry_name: any;
  registry_url: any;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates?: number[];
  stolen_location?: string;
  thumb?: string;
  title: string;
  url: string;
  year?: number;
  propulsion_type_slug: string;
  cycle_type_slug: string;
  registration_created_at: number;
  registration_updated_at: number;
  api_url: string;
  manufacturer_id: number;
  paint_description: any;
  name: any;
  frame_size: any;
  rear_tire_narrow: boolean;
  front_tire_narrow: any;
  type_of_cycle: string;
  test_bike: boolean;
  rear_wheel_size_iso_bsd: any;
  front_wheel_size_iso_bsd: any;
  handlebar_type_slug: any;
  frame_material_slug: any;
  front_gear_type_slug: any;
  rear_gear_type_slug: any;
  extra_registration_number: any;
  additional_registration: any;
  stolen_record: any;
  public_images: PublicImage[];
  components: [];
}

interface PublicImage {
  name: string;
  full: string;
  large: string;
  medium: string;
  thumb: string;
  id: number;
}

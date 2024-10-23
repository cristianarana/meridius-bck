export class CreatePlayerDTO{
    fullname: string;
    birthdate?: Date;
    weight: number;
    height: number;
    position: string;
    alternativePosition?: string;
    weakFoot?: string;
    strongFoot?: string;
}
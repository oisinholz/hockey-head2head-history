export interface ITeam {
    id: number,
    name: string,
    logo: string,
  }

  export interface IStandings {
    position: number,
    stage: string,
    group: any,
    team: ITeam,
    league: any,
    country: any,
    games: any,
    goals: any,
    points: number,
    form: string,
    description: any
  }




export interface Project {
        author: Array<string>,
        projectName: string,
        description: string,
        image: string,
        web: string,
        financialNeeds: number,
        uses: Array<object>,
        financed: number,
        sponsors: Array<string>  
      }

export interface User {

    name: string,
    email: string,
    password: string,
    balance: number,
    createdAt: string, 
    updatedAt: string,
    _id: string
}

export interface Transaction {

    user: any,
    project: any,
    amount: number
}


export type ID = string | number
export type Entity =
    | 'user'
export type Category = 'Product' | 'Service' | 'Hour' | 'Material' | 'Parts'
export type PaymentType = 'Cash' | 'Check' | 'Card' | 'Transfer' | 'Credit Card'
export interface ObjectOfStrings {
    [propName: string]: string
}
export interface Address {
    addressId?: ID
    addressLine1?: string
    addressLine2?: string
    city?: string
    zipCode?: string
    countryName?: string
    state?: string
    additionalInfo?: string
    isDefault?: boolean
    isBilling?: boolean
    [propName: string]: any
}
export interface Phones {
    phone?: string
    ext?: string
}
export interface Clients {
    clientId?: ID
    firstName?: string
    lastName?: string
    company?: string
    email?: string
    phones?: Phones[] | Phones | string
}
export interface MainData {
    client?: Clients | ID
    address?: Address[] | Address | string
    email?: string
    password?: string
    firstName?: string
    lastName?: string
    company?: string
    phones?: Phones
    phone?: string
    teamRole?: string
    companyAccountId?: ID
    name?: string
    description?: string
    website?: string
    contactName?: string
    fax?: string
    category?: Category
    price?: string
    cost?: string
    vendor?: { _id?: ID } | ID
    productCode?: string
    productNumber?: string
    url?: string
    brandNumber?: string
    addCustomField?: string
    reason?: string
    brand?: string
    unitOfMeasure?: string
    clientId?: ID
    dueDate?: string
    //#TODO проверить order - create, search - Date ? string
    startDate?: Date | string
    endDate?: Date | string
    //#TODO Проверить worker?: ID[]???
    worker?: ID[] | ID
    invoice?: ID
    amount?: number
    paymentType?: PaymentType
    checkNumber?: string
    status?: string
    priority?: string
    order?: ID
    paymentInfo?: string
    carrier?: string
    //#TODO string??? PODate
    PODate?: Date | string
    deliveryAddress?: string
    trackingNumber?: string
    deliveryType?: string
}
export interface CreateInvoice {
    invoiceSearchInput: string
    headerField: string
    addItem: string
    clientInfo: string
}

export default class EnquiryService {

    async postEnquiry(yogaClass, enquiry) {
        enquiry.yogaClass = yogaClass

        const enquiryPath = 'https://uc2iohbbzc.execute-api.ap-southeast-2.amazonaws.com/prod/';
        const body = JSON.stringify(enquiry);
        console.log(`Calling POST ${enquiryPath}: ${body}`)

        const response = await fetch(enquiryPath, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body
        })

        if (!response.ok) {
            const errorMessage = `Failed post enquiry RESPONSE: ${response.status}.`;
            console.error(errorMessage)
            throw new Error(errorMessage)
        }
        console.log(`RESPONSE: ${response.status}: ${JSON.stringify(await response.json())}`)
    }

}


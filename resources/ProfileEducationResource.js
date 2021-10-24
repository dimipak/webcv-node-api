
class ProfileEducationResource {

    constructor() {
        this.withoutFields = [
            //
        ];
    }

    response(res, result) {

        let data = []

        result.educations.forEach((row) => {
            data.push(this.filterFields({
                'profile_id': row.profile_id,
                'title': row.title,
                'reference': row.reference,
                'description': row.description,
                'link': row.link,
                'date': row.date
            }))
        })

        return data;
    }

    filterFields(data) {
        let filtered = {};

        Object.keys(data).forEach(key => {
            if (this.withoutFields.includes(key)) return;
            filtered[key] = data[key]
        })

        return filtered;
    }
}

module.exports = new ProfileEducationResource;
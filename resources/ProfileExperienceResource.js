
class ProfileExperienceResource {

    constructor() {
        this.withoutFields = [
            //
        ];
    }

    response(res, result) {

        let data = []

        result.experiences.forEach((row) => {
            data.push(this.filterFields({
                'profile_id': row.profile_id,
                'company_name': row.company_name,
                'role': row.role,
                'description': row.description,
                'country': row.country,
                'city': row.city,
                'start_date': row.start_date,
                'end_date': row.end_date
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

module.exports = new ProfileExperienceResource;

class GetUserDetailsResource {

    constructor() {
        this.withoutFields = [
            'created_at',
            'updated_at'
        ];
    }

    response(res, result) {

        return this.filterFields({
            'user_id': result.user_id,
            'username': result.username,
            'name': result.name,
            'surname': result.surname,
            'quote': result.quote,
            'quote2': result.quote2,
            'email': result.email,
            'phone': result.phone,
            'about': result.about,
            'created_at': result.createdAt,
            'updated_at': result.updatedAt
        });

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

module.exports = new GetUserDetailsResource;
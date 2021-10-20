
class ProfileDetailsResource {

    constructor() {
        this.withoutFields = [
            'created_at',
            'updated_at'
        ];
    }

    response(res, result) {

        return this.filterFields({
            'profile_id': result.profile_id,
            'username': result.username,
            'first_name': result.first_name,
            'last_name': result.last_name,
            'first_quote': result.first_quote,
            'second_quote': result.second_quote,
            'email': result.email,
            'phone': result.phone,
            'about': result.about,
            'profile_image': result.profile_image,
            'cover_image': result.cover_image,
            'social_networks': result.socialNetworks
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

module.exports = new ProfileDetailsResource;
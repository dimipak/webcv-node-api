
class ProfilePortfolioResource {

    constructor() {
        this.withoutFields = [
            //
        ];
    }

    response(res, result) {

        let data = []

        result.portfolios.forEach((row) => {
            data.push(this.filterFields({
                'profile_id': row.profile_id,
                'name': row.name,
                'type': row.type,
                'technology': row.technology,
                'customer': row.customer,
                'image_url': row.image_url,
                'website_url': row.website_url
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

module.exports = new ProfilePortfolioResource;
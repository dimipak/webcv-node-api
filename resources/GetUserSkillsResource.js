
class GetUserSkillsResource {

    constructor() {
        this.withoutFields = [
            //
        ];
    }

    response(res, result) {

        let data = []

        result.forEach((row) => {
            data.push(this.filterFields({
                'user_skills_id': row.user_skills_id,
                'user_id': row.user_id,
                'name': row.name,
                'progress': row.progress,
                'description': row.description,
                'order': row.order,
            }))
        })

        res.json(data)
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

module.exports = new GetUserSkillsResource();
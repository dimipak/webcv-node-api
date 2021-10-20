
class ProfileSkillsResource {

    constructor() {
        this.withoutFields = [
            //
        ];
    }

    response(res, result) {

        let data = []

        result.profileSkills.forEach((row) => {
            data.push(this.filterFields({
                'skill_id': row.skill_id,
                'profile_id': row.profile_id,
                'name': row.name,
                'progress': row.progress,
                'description': row.description,
                'order': row.order,
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

module.exports = new ProfileSkillsResource;
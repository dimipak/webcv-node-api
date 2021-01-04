const responses = {
    success: (res, data) => {
        res.json(data);
    },
    notFound: (res) => {
        res.status(404).json({
            'error': true,
            'message': 'Not Found'
        })
    },
    error: (res, err) => {
        res.status(400).json({
            'error': true,
            'message': err
        })
    }
}

module.exports = responses;
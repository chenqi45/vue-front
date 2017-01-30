class Status{
    static get SUCCESS(){
        return 1001;
    }
    static get ERROR(){
        return 1002;
    }
    static get FAILED(){
        return 1003;
    }
    static get INVALID_TOKEN(){
        return 1004;
    }
}

export default Status
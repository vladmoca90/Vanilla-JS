var data = {
    "d": {
        "__type": "eventdata.co.uk.APIMasterPersonPreference+PreferenceAPIResponseJSON",
        "Preferences": [{
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root",
                "Name": "My Data Controller",
                "Description": "Would you like to hear from My Data Controller (*)?",
                "Status": "Active"
            },
            {
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root.Conferences",
                "Name": "Conferences",
                "Description": "Would you like to hear periodic updates about our conferences (*)?",
                "Status": "Active"
            },
            {
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root.Delete",
                "Name": "don't delete me",
                "Description": "don't delete me... (*)",
                "Status": "Hidden"
            },
            {
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root.Events",
                "Name": "Events",
                "Description": "Do you want to read more about Events (*)?",
                "Status": "Active"
            },
            {
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root.Exhibitions",
                "Name": "Exhibitions",
                "Description": "Would you like to hear periodic updates on our exhibitions (*)?",
                "Status": "Active"
            },
            {
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root.Exhibitions.HealthCare",
                "Name": "Heath Care",
                "Description": "Would you like to hear periodic updates about our Health Care exhibition  (*)?",
                "Status": "Active"
            },
            {
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root.Exhibitions.HealthCare.3rdPartyPartnerCommLtd",
                "Name": "3rd Party - Partner Comm Ltd.",
                "Description": "Is it OK to share information with Partner Comm Ltd. to hear about their service  (*)?",
                "Status": "Active"
            },
            {
                "__type": "eventdata.co.uk.PreferenceJSON",
                "ControllerCode": "TEST1",
                "PreferenceCode": "Root.Exhibitions.Training",
                "Name": "Training",
                "Description": "Would you like to hear about training?",
                "Status": "Active"
            }
        ],
        "Result": "success",
        "Message": "Loaded"
    }
}

function keysOfData(data) {

    return Object.keys(data.d);
}

function valuesOfData(data) {

    return Object.values(data.d);
}
describe('Features: Validating homedepot site', () => {

    before(() => {
        console.log('Starting execution');
    });


    after(() => {
        console.log('Windows are closing');
        browser.closeWindow();
        
    });


    describe.only('Validating the search box', () => {
        it('Given: User Navigate to Homedepot site', () => {
            browser.deleteAllCookies();
            browser.url('https://www.homedepot.com');
            browser.maximizeWindow();
            browser.pause('2000');
        });

        it('When: User search for Hammer', () => {
            const searchBox = $('#headerSearch');
            const searchButton = $('#headerSearchButton');
            searchBox.setValue('Hammer');
            searchButton.click();
            browser.pause('2000');
        });
        it('Then: User get the result', () => {
            const result= $('.results-wrapped');
            expect(result).toBeExisting();
            //expect(browser).toHaveUrlContaining('Hammer')
            browser.execute('window.scrollTo(0,(document.body.scrollHeight)/3)');
            browser.pause('2000');           
            browser.execute('window.scrollTo(0,document.body.scrollHeight)');
            browser.pause('2000');

        });
        it('And: User validate the result count is mathcing',()=>{
            const resultsArray = $$(".results-wrapped [id*=browse-search-pods-] [data-automation-id='podnode']");
            console.log('The Result Length is ',resultsArray.length);
        })

    });
    describe('Validating the search box2', () => {
        it('Given: User Navigate to Homedepot site again', () => {
            browser.deleteAllCookies();
            browser.url('https://www.homedepot.com');
            browser.maximizeWindow();
            browser.pause('2000');
        });

        it('When: User search for Pliers', () => {
            const searchBox = $('#headerSearch');
            const searchButton = $('#headerSearchButton');
            searchBox.setValue('Pliers');
            searchButton.click();
            browser.pause('2000');
        });
        it('Then: User get the result', () => {


        });

    });


    /*
        describe('Validating the header', () => {
            
        });
    
    
        describe('Validating the footer', () => {
            
        });
    
    
        describe('Validating the page title', () => {
            
        });
        */




})

Routes = / -> login
/browse -> browse
/movie/:id -> SingleMoviePage

Login -> createUser || signInuser || updateUser from firebase
Header -> onAuthStateChange (here coz we have protect route)
Browse -> ( MainContainer and SecondryContainer ) || GptSearchPage
MainContainer -> VideoBackground and VideoTitle
VideoBackground -> BgTrailer
VideoTitle -> Info of Movie
SecondryContainer -> MovieList
MovieList -> MovieCard
MovieCard -> info of Movie
GptSearchPage -> GptSearchBar && GptMovieSuggestion
GptSearchBar -> input + button + fechTMDB api
GptMovieSuggestion -> get data from gptSlice + render MovieList
SingleMoviePage -> fetchData acc. to MovieId(useParams) + add in MovieSlice + render Info of SingleMovie

CustomHooks -> useFetchAllTypeMovie 
               useFetchBGTrailer 
               useFetchMovies 
               useFetchPopularMovie 
               useFetchTopRated 
               useFetchUpcomming

Redux Store -> Slice -> appConfigSlice
                        gptSlice
                        MovieSlice
                        UserSlice


MultiLanguage Feature (IMPORTANT)







Netflix GPT
Create React App
Configured TailwindCSS
Header
Routing of App
Login Form
Sign up Form
Form Validation
useRef Hook
Firebase Setup
Deploying our app to production
Create SignUp User Account
Implement Sign In user Api
Created Redux Store with userSlice
Implemented Sign out
Update Profile
BugFix: Sign up user displayName and profile picture update
BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
Unsubscibed to the onAuthStateChanged callback
Add hardcoded values to the constants file
Regiter TMDB API & create an app & get access token
Get Data from TMDB now playing movies list API
Custom Hook for Now Playing Movies
Create movieSlice
Update Store with movies Data
Planning for MainContauiner & secondary container
Fetch Data for Trailer Video
Update Store with Trailer Video Data
Embedded the Yotube video and make it autoplay and mute
Tailwind Classes to make Main Container look awesome
Build Secondary Component
Build Movie List
build Movie Card
TMDB Image CDN URL
Made the Browsre page amazing with Tailwind CSS
usePopularMovies Custom hook
GPT Search Page
GPT Search Bar
(BONUS) Multi-language Feature in our App
Get Open AI Api Key
Gpt Search API Call
fetched gptMoviesSuggestions from TMDB
created gptSlice added data
Resused Movie List component to make movie suggestion container
Memoization
Added .env file
Adding .env file to gitignore
Made our Site Responsive
Features
Login/Sign Up
Sign In /Sign up Form
redirect to Browse Page
Browse (after authentication)
Header
Main Movie
Tailer in Background
Title & Description
MovieSuggestions
MovieLists * N
NetflixGPT
Search Bar
Movie Suggestions
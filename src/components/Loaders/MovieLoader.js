import React from "react"
import ContentLoader from "react-content-loader"

const MovieLoader = () => (
    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
        <div className={`card`}>
                <ContentLoader
                    speed={2}
                    width={160}
                    height={242}
                    backgroundColor="#4a4a4a"
                    foregroundColor="#5a5858"
                >
                    <rect x="5" y="0" rx="0" ry="0" width="160" height="242"/>
                </ContentLoader>
        </div>
    </div>
);

export default MovieLoader

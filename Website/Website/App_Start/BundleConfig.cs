using System.IO;
using System.Security.Cryptography;
using System.Web;
using System.Web.Hosting;
using System.Web.Optimization;

namespace Website
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            var jsBundle = new ScriptBundle("~/bundles/semanticui")
                .Include(
                    "~/assets/js/jquery.js", 
                    "~/assets/js/semantic.min.js");
            var cssBundle = new StyleBundle("~/bundles/css")
                .Include(
                      "~/assets/css/semantic.min.css",
                      "~/assets/css/custom.css");

            var appBundle = new ScriptBundle("~/bundles/app")
                .Include(
                    "~/assets/js/bundle.js");

            cssBundle.Transforms.Add(new FileHashVersionBundleTransform());
            jsBundle.Transforms.Add(new FileHashVersionBundleTransform());
            appBundle.Transforms.Add(new FileHashVersionBundleTransform());

            bundles.Add(cssBundle);
            bundles.Add(jsBundle);
            bundles.Add(appBundle);
        }
    }

    public class FileHashVersionBundleTransform : IBundleTransform
    {
        public void Process(BundleContext context, BundleResponse response)
        {
            foreach (var file in response.Files)
            {
                using (FileStream fs = File.OpenRead(HostingEnvironment.MapPath(file.IncludedVirtualPath)))
                {
                    //get hash of file contents
                    byte[] fileHash = new SHA256Managed().ComputeHash(fs);

                    //encode file hash as a query string param
                    string version = HttpServerUtility.UrlTokenEncode(fileHash);
                    file.IncludedVirtualPath = string.Concat(file.IncludedVirtualPath, "?v=", version);
                }
            }
        }
    }
}
